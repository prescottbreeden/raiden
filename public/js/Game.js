const radian = Math.PI/180;
const INITIAL = 1;
const GAME_PLAYING = 2;
const GAME_OVER = 3;
const KEY_CODE = {
	left: 37,
	up: 38,
	right: 39,
	down: 40,
	spacebar: 32,
	enter: 13,
	f: 70,
	d: 68,
	s: 83,
	a: 65
}


class Game {
	constructor(canvas) {
		this._currentState = INITIAL;
		this._velocity = 1;
		this._music = false;
		this.canvas = canvas;
		this.context = this.canvas.getContext('2d');

		//get-set State
		this.getState = () => this._currentState;
		this.setState = (newState) => this._currentState = newState;

		// get-set Velocity
		this.getVelocity = () => this._velocity;
		this.setVelocity = (newVelocity) => this._velocity = newVelocity;

		// get-toggle Music
		this.getMusic = () => this._music;
		this.toggleMusic = () => this._music = !this._music;

		this.pewpew = () => {
			console.log('pew pew');
			const pew = new Audio();
			pew.src = 'public/music/blaster.mp3';
			pew.play();
			this.bulletFactory.generateBullets();
		}

		// bind event listeners
		this.bindEvents();

		// create Game objects
		this.createObjects();
	}

	start() {
		window.requestAnimationFrame(() => {
			this.runGameLoop();
		})
	}


	runGameLoop() {
		switch(this.getState()) {
			case INITIAL:
				this.drawMenuScreen();
				break;
			case GAME_PLAYING:
				this.drawGamePlayingScreen();
				break;
			case GAME_OVER:
				this.drawGameOverScreen();
				break;
		}
		window.requestAnimationFrame(() => {
			this.runGameLoop();
		})
	}


	createObjects() {
		this.cloudFactory = new CloudFactory(this.canvas);
		this.player = new Player('public/images/mship1.png', this.canvas);
		this.bulletFactory = new BulletFactory(this, this.player);
		this.enemyFactory = new EnemyFactory(this);
		this.explosionFactory = new ExplosionFactory(this);
	}


	// ============================ //
	// ======== GAME MENU ========= //
	// ============================ //

	drawMenuScreen() {
		this.context.fillStyle = 'lightblue';
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

		this.context.fillStyle = 'white';
		this.context.font = '36 Courier';
		this.context.fillText('Click to Start', this.canvas.width/2 -100, this.canvas.height/2);

	}


	// ============================ //
	// ======== GAME PLAY ========= //
	// ============================ //

	drawGamePlayingScreen() {
		// music
		if(!this.getMusic()) {
			this.toggleMusic();
			this.soundtrack = new Sound('public/music/soundtrack.mp3');
		}

		// clear canvas
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		// this.canvas.width = this.canvas.width;

		// animate background
		this.animateBackground();

		// draw clouds
		this.checkCollisions();
		this.drawClouds();
		this.drawBullets();
		this.drawEnemies();
		this.drawExplosions();

		// draw player
		this.player.update();
	}


	// ============================ //
	// ======== GAME OVER ========= //
	// ============================ //

	drawGameOverScreen() {
		this.context.fillStyle = 'black';
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

		this.context.fillStyle = 'white';
		this.context.font = '36 Courier';
		this.context.fillText('game over', this.canvas.width/2 -100, this.canvas.height/2);

	}


	// ============================ //
	// ======== FUNCTIONS ========= //
	// ============================ //
	
	animateBackground() {

	}


	drawEnemies() {
		const enemies = this.enemyFactory.enemies;
		for(let i = 0; i < enemies.length; i++) {
			const enemy = enemies[i];
			enemy.draw();
		}
		this.removeExtraEnemies();
	}


	removeExtraEnemies() {
		const enemies = this.enemyFactory.enemies;
		for(let i = 0; i < enemies.length; i++) {
			if(enemies[i].y > this.canvas.height || enemies[i].y < -2*enemies[i].h) {
				enemies.splice(i, 1);
			}
		}
	}


	drawBullets() {
		const bullets = this.bulletFactory.bullets;
		for(let i = 0; i < bullets.length; i++) {
			bullets[i].draw();
		}
		this.removeExtraBullets();
	}


	removeExtraBullets() {
		const bullets = this.bulletFactory.bullets;
		for(let i = 0; i < bullets.length; i++) {
			if(bullets[i].y > this.canvas.height) {
				bullets.splice(i, 1);
			}
		}
	}


	drawClouds() {
		const clouds = this.cloudFactory.clouds;
		for(let i = 0; i < clouds.length; i++) {
			clouds[i].draw();
			clouds[i].y += this.getVelocity();
		}
		this.removeExtraClouds();
	}


	removeExtraClouds() {
		const clouds = this.cloudFactory.clouds;
		for(let i = 0; i < clouds.length; i++) {
			if(clouds[i].y > this.canvas.height) {
				clouds.shift();
			}
		}
	}


	checkCollisions() {
		this.checkSuicides();
		const bullets = this.bulletFactory.bullets;
		const enemies = this.enemyFactory.enemies;
		for(let i = 0; i < bullets.length; i++) {
			for(let j = 0; j < enemies.length; j++) {
				const enemy = enemies[j];
				const bullet = bullets[i];
				if(bullet.class != 'player') { continue; }
				const checkPlayerBullets = getDistance(enemy, getPosition(bullet));
				if(checkPlayerBullets < enemy.r) {
					enemy.hp -= bullet.power;
					if(enemy.hp <= 0) {
						const hit = new Audio();
						hit.src = 'public/music/explosion1.mp3';
						hit.play();
						bullets.splice(i, 1);
						this.explosionFactory.generateExplosions(enemy);
						enemies.splice(j, 1);
					}
				}
				
			}
		}
	}

	checkSuicides() {
		const enemies = this.enemyFactory.enemies;
		for(let i = 0; i < enemies.length; i++) {
			const enemy = enemies[i];
			const distance = getDistance(enemy, this.player.position);
			if(distance < enemy.r) {
				const hit = new Audio();
				hit.src = 'public/music/explosion1.mp3';
				hit.play();
				this.setState(GAME_OVER);
			}
		}

	}


	drawExplosions() {
		const explosions = this.explosionFactory.explosions;
		for(let i = 0; i < explosions.length; i++) {
			const explosion = explosions[i];
			explosion.draw();
			if(explosion.row + explosion.col === 15) { explosions.splice(i, 1); }
		}
		
	}

	reset() {

	}


	ceaseFire() {
		clearInterval(this.playerFire);
	}


	shoot() {
		this.playerFire = setInterval(this.pewpew, 150);
	}


	// ============================ //
	// ===== EVENT LISTENERS ====== //
	// ============================ //
	
	bindEvents() {
		let down = false;
		let game = this;

		window.addEventListener('keyup', function(e) {
			if(game.getState() === GAME_PLAYING) {
				switch(e.keyCode) {
					case KEY_CODE.left:
						if(game.player.vx < 0) {game.player.vx = 0;}
						break;
					case KEY_CODE.up:
						if(game.player.vy < 0) {game.player.vy = 0;}
						break;
					case KEY_CODE.right:
						if(game.player.vx > 0) {game.player.vx = 0;}
						break;
					case KEY_CODE.down:
						if(game.player.vy > 0) {game.player.vy = 0;}
						break;
					case KEY_CODE.spacebar:
						game.ceaseFire();
						down = false;
				}
			}
		})

		window.addEventListener('keydown', function(e) {
			if(game.getState() === GAME_PLAYING) {
				switch(e.keyCode) {
					case KEY_CODE.left:
						game.player.vx = -4.5;
						break;
					case KEY_CODE.up:
						game.player.vy = -4.5;
						break;
					case KEY_CODE.right:
						game.player.vx = 4.5;
						break;
					case KEY_CODE.down:
						game.player.vy = 4.5;
						break;
					case KEY_CODE.spacebar:
						if(down) return;
						down = true;
						game.shoot();
				}
			}
		})

		game.canvas.addEventListener('click', function(e) {
			if(game.getState() === INITIAL) {
				game.cloudFactory.generateClouds();
				game.setState(GAME_PLAYING);
				game.enemyFactory.createAllEnemies();
			}
		})

	}


}

