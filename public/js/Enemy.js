class Enemy {
	constructor(src, canvas) {
		this.canvas = canvas;
		this.context = this.canvas.getContext('2d');

		// specs
		this.h = 100;
		this.w = 90;
		this.x = this.canvas.width/2 + this.w/2;
		this.y = 0 - this.h;
		this.vy = 2;
		this.vx = 0;
		this.src = src;
		this.img = null;

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

			this.context.drawImage(this.img, this.x, this.y, this.w, this.h);
		}
	}

}
