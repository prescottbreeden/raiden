class Item {
	constructor(game, enemy) {
		this.game = game;
		this.canvas = game.canvas;
		this.context = game.context;

		this.frame = 0;
		this.types = ['Blue', 'Green', 'Red', 'Yellow'];
		this.index = getRandomInt(0, this.types.length);
		this.color = this.types[this.index];
		this.src = 'public/images/orbs/'+ this.color + '/frame' + this.frame + '.png';
		this.x = enemy.x;
		this.y = enemy.y;
		this.h = 50;
		this.w = 50;
		this.vx = 2;
		this.vy = 2;

		this.create();
		this.changeWeapon();
	}

	create() {
		this.img = new Image();
		this.img.src = this.src;
	}

	changeWeapon() {
		const item = this;
		setInterval(function() {
			item.index++;	
			item.index %= item.types.length;
			item.color = item.types[item.index];
		}, 5000);
	}

	draw() {
		if(this.img != null) {
			this.y += this.vy;
			this.x += this.vx;
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
			this.context.save();
			this.img.src = 'public/images/orbs/' + this.color + '/frame' + this.frame + '.png';
			this.context.translate(this.x, this.y);
			this.context.drawImage(this.img, -(this.w/2), -(this.h/2), this.w, this.h);
			this.context.restore();
			let counter = 0;
			if(counter %10 === 0) {
				this.frame++;
			}
			counter++;
			counter %= 100;
			this.frame %= 6;
		}
		
	}

}
