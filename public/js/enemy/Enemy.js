class Enemy {
	constructor(src, game) {
		this.game = game;
		this.canvas = game.canvas;
		this.context = game.context;
		this.playerPosition = getPosition(game.player);

		// specs
		console.log(src);
		
		// blackbird enemy
		if(src === 'blackbird') {
			this.tracking = true;
			this.contain = false;
			this.spin = false;
			this.item = false;
			this.h = 100;
			this.w = 100;
			this.r = this.w/2.1;
			this.x = getRandomInt(this.canvas.width*.1, this.canvas.width*.9);
			this.y = -this.h;
			this.weaponSpeed = 8;
			this.vy = game.getVelocity() * 8;
			this.g = -.05;
			if(this.x >= this.canvas.width/2) {
				this.vx = 1;
			} else {
				this.vx = -1;
			}
			this.src = 'public/images/'+src+'.png';
			this.img = null;
			this.weaponType = 'ball';
			this.fireDelay = 1000;
			this.hp = 10;
			this.shoot(this.fireDelay);
			this.shoot(this.fireDelay*2);
		}

		if(src === 'spacestation') {
			this.tracking = false;
			this.contain = true;
			this.spin = true;
			this.item = true;
			this.h = 120;
			this.w = 120;
			this.r = this.w/2;
			this.x = getRandomInt(this.canvas.width*.1, this.canvas.width*.9);
			this.y = -this.h;
			this.g = 0;
			this.vy = game.getVelocity() * 2;
			this.vx = 1; 
			this.weaponSpeed = 5;

			this.src = 'public/images/'+src+'.png';
			this.img = null;
			this.weaponType = 'ball';
			this.fireDelay = 2000;
			this.hp = 100;
			this.shoot(this.fireDelay);
			this.shoot(this.fireDelay);
			this.shoot(this.fireDelay);
		}

		this.angle = Math.atan2(this.playerPosition.y - this.y, this.playerPosition.x - this.x) - 3.141 / 2;
		this.create();
	}


	create() {
		this.img = new Image();
		this.img.src = this.src;
	}

	shoot(delay) {
		let game = this.game;
		let enemy = this;
		setTimeout(function() {
			if(enemy.hp <= 0) { return; }
			const pew = new Audio();
			pew.src = 'public/music/retro-shot-blaster.mp3';
			pew.play();
			const bullet = new Bullet(game, enemy);
			const player = getPosition(game.player);
			const distance = getDistance(game.player, enemy);
			bullet.vx = (player.x - enemy.x)/distance*enemy.weaponSpeed;
			bullet.vy = (player.y - enemy.y)/distance*enemy.weaponSpeed;
			game.bulletFactory.bullets.push(bullet);
		}, delay)

	}


	draw() {
		this.context.save();
		this.vy += this.g;
		this.y += this.vy;
		this.x += this.vx;

		if(this.contain) {
			if(this.y+this.h > this.canvas.height && this.vy > 0) { 
				this.y = this.canvas.height-this.h;
				this.vy *= -1;
			}
			if(this.y < this.h/2 && this.vy < 0) { 
				this.y = this.h/2;
				this.vy *= -1;
			}
			if(this.x < this.w/2 && this.vx < 0) {
				this.x = this.w/2;
				this.vx *= -1;
			}
			if(this.x + this.w/2 > this.canvas.width && this.vx > 0) {
				this.x = this.canvas.width - this.w/2;
				this.vx *= -1;
			}
		}

		this.context.translate(this.x, this.y);

		if(this.tracking) {
			this.playerPosition = getPosition(this.game.player);
			this.angle = Math.atan2(this.playerPosition.y - this.y, this.playerPosition.x - this.x) - 3.141 / 2;
			this.context.rotate(this.angle);
		}

		if(this.spin) {
			this.angle+=5; 
			this.context.rotate(this.angle);
		}
		
		this.context.drawImage(this.img, -(this.w/2), -(this.h/2), this.h, this.w);

		// this.context.beginPath();
		// this.context.arc(0, 0, this.r, 0, 2 * Math.PI, false);
		// this.context.strokeStyle = 'black';
		// this.context.fillStyle = 'rgba(0, 0, 0, .2)';
		// this.context.lineWidth = 2;
		// this.context.stroke();
		// this.context.fill();

		this.context.restore();

	}

}
