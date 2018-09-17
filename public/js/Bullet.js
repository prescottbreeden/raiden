class Bullet {
	constructor(canvas, ship) {
		this.canvas = canvas;
		this.context = this.canvas.getContext('2d');

		// specs
		if(ship.weaponType === 'blaster') {
				this.vy = -20;
			if(ship.weaponStr === 1) {
				this.h = 50;
				this.w = 5;
				this.x = ship.x + ship.w/2 - this.w/2; 
				this.y = ship.y;
				this.power = ship.weaponStr * 10;
			} else if(ship.weaponStr === 2) {
				this.h = 75;
				this.w = 10;
				this.x = ship.x + ship.w/2 - this.w/2; 
				this.y = ship.y;
				this.power = ship.weaponStr * 10;
			} else if(ship.weaponStr === 3) {
				this.h = 100;
				this.w = 15;
				this.x = ship.x + ship.w/2 - this.w/2; 
				this.y = ship.y;
				this.power = ship.weaponStr * 10;
			} else if(ship.weaponStr === 4) {
				this.h = 100;
				this.w = 25;
				this.x = ship.x + ship.w/2 - this.w/2; 
				this.y = ship.y;
				this.power = ship.weaponStr * 10;
			} else if(ship.weaponStr === 4) {
				this.h = 100;
				this.w = 5;
				this.x = ship.x + ship.w/2 - this.w/2; 
				this.y = ship.y;
				this.power = ship.weaponStr * 10;
			}
		}
	}

	draw() {
		this.context.fillStyle = 'blue';
		this.context.fillRect(this.x, this.y, this.w, this.h);
	}
}
