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
		this._velocity = 2;
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

		// animate background
		this.animateBackground();

		// draw clouds
		this.drawClouds();

		// draw player
		this.player.draw();
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

	}


	reset() {

	}


	// ============================ //
	// ===== EVENT LISTENERS ====== //
	// ============================ //
	
	bindEvents() {
		let game = this;
		console.log('balls');
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
						game.player.weaponsArmed = false;
						console.log('stop firing!');
				}
			}
		})
		window.addEventListener('keydown', function(e) {
			if(game.getState() === GAME_PLAYING) {
				switch(e.keyCode) {
					case KEY_CODE.left:
						game.player.vx = -5;
						break;
					case KEY_CODE.up:
						game.player.vy = -5;
						break;
					case KEY_CODE.right:
						game.player.vx = 5;
						break;
					case KEY_CODE.down:
						game.player.vy = 5;
						break;
					case KEY_CODE.spacebar:
						game.player.weaponsArmed = true;
						console.log('keep firing assholes!');
				}
			}
		})
		window.addEventListener('keyup', function(e) {
			if(e.keyCode === KEY_CODE.spacebar) {
				// game.player.generateBullets();
				game.player.playerFire = false;
			}
		})
		game.canvas.addEventListener('click', function(e) {
			game.cloudFactory.generateClouds();
			game.setState(GAME_PLAYING);
		})

	}


}

