class Player {
	constructor(src, canvas) {
		this.canvas = canvas;
		this.context = this.canvas.getContext('2d');

		// specs
		this.h = 100;
		this.w = 85;
		this.r = this.w/1.4;
		this.x = this.canvas.width/2;
		this.y = this.canvas.height - this.h;
		this.vy = 0;
		this.vx = 0;
		this.src = src;
		this.img = null;
		this.weaponType = 'blaster';
		this.weaponStr = 1;
		this.hitBox = { a: '', b: '', c:'' }

		this.create();
	}

	create() {
		this.img = new Image();
		this.img.src = this.src;
	}

	currentHitBox() {
		this.position = getPosition(this);
		this.hitBox.a = {
			x: this.position.x, 
			y: this.position.y - this.r
		}
		this.hitBox.b = {
			x: this.position.x - this.r * .66, 
			y: this.position.y + this.r * .66
		}
		this.hitBox.c = {
			x: this.position.x + this.r * .66, 
			y: this.position.y + this.r * .66
		}
	}

	update() {
		this.currentHitBox();
		if(this.img != null) {
			this.y += this.vy;
			this.x += this.vx;

			if(this.y + this.h > this.canvas.height) {
				this.y = this.canvas.height - this.h;
			} else if(this.y < 0) {
				this.y = 0;
			}

			if(this.x + this.w > this.canvas.width) {
				this.x = this.canvas.width - this.w;
			} else if(this.x < 0) {
				this.x = 0;
			}

			this.context.save();
			this.context.beginPath();
			this.context.arc(this.position.x, this.position.y, this.r, 0, 360 * radian, false);
			this.context.strokeStyle = 'white';
			this.context.fillStyle = 'rgba(350, 350, 350, .2)';
			this.context.lineWidth = 2;
			this.context.stroke();
			this.context.fill();
			this.context.drawImage(this.img, this.x, this.y, this.w, this.h);

			// this.context.strokeStyle = 'red';
			// this.context.beginPath();	
			// this.context.moveTo(this.hitBox.a.x, this.hitBox.a.y);
			// this.context.lineTo(this.hitBox.b.x, this.hitBox.b.y);
			// this.context.lineTo(this.hitBox.c.x, this.hitBox.c.y);
			// this.context.lineTo(this.hitBox.a.x, this.hitBox.a.y);
			// this.context.stroke();
			
			this.context.restore();
		}
	}

}
