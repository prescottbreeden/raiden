class Player {
	constructor(src, canvas) {
		this.canvas = canvas;
		this.context = this.canvas.getContext('2d');

		// specs
		this.h = 110;
		this.w = 85;
		this.x = this.canvas.width/2 + this.w/2;
		this.y = this.canvas.height - this.h;
		this.vy = 0;
		this.vx = 0;
		this.src = src;
		this.img = null;
		this.weaponType = 'blaster';
		this.weaponStr = 1;

		this.create();
	}

	create() {
		this.img = new Image();
		this.img.src = this.src;
	}

	draw() {
		if(this.img != null) {
			this.y += this.vy;
			this.x += this.vx;

			if(this.y + this.h > this.canvas.height) {
				this.y = this.canvas.height - this.h;
			} else if(this.y < 0) {
				this.y = 0;
			}

			this.context.drawImage(this.img, this.x, this.y, this.w, this.h);
		}
	}

}
