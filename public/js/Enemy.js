class Enemy {
	constructor(src, game) {
		this.canvas = game.canvas;
		this.game = game;
		this.context = game.context;
		this.playerPosition = getPosition(game.player);

		// specs
		
		// blackbird enemy
		if(src === 'blackbird') {
			this.tracking = true;
			this.h = 100;
			this.w = 90;
			this.r = this.w/1.8;
			this.x = this.canvas.width/2 + this.w/2;
			this.y = 0 - this.h;
			this.vy = game.getVelocity() * 8;
			this.g = -.05;
			this.vx = 1;
			this.src = 'public/images/'+src+'.png';
			this.img = null;
		}

		this.angle = Math.atan2(this.playerPosition.y - this.y, this.playerPosition.x - this.x) - 3.141 / 2;
		this.create();
	}


	create() {
		this.img = new Image();
		this.img.src = this.src;
	}


	draw() {
		this.context.save();
		this.vy += this.g;
		this.y += this.vy;
		this.x += this.vx;
		this.context.translate(this.x, this.y);

		if(this.tracking) {
			this.playerPosition = getPosition(this.game.player);
			this.angle = Math.atan2(this.playerPosition.y - this.y, this.playerPosition.x - this.x) - 3.141 / 2;
			this.context.rotate(this.angle)
		}
		
		this.context.drawImage(this.img, -(this.w/2), -(this.h/2), this.h, this.w);
		this.context.beginPath();
		this.context.arc(0, 0, this.r, 0, 2 * Math.PI, false);
		this.context.strokeStyle = 'black';
		this.context.fillStyle = 'rgba(0, 0, 0, .2)';
		this.context.lineWidth = 2;
		this.context.stroke();
		this.context.fill();
		this.context.restore();

	}

}
