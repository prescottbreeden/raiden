class Bullet {
	constructor(game, ship) {
		this.canvas = game.canvas;
		this.context = game.context;
		this.ship = ship;

		// specs
		
		// ---------------------- //
		// --- PLAYER WEAPONS --- //
		// ---------------------- //
		
		if(ship.weaponType === 'blaster') {
			this.class = 'player';
			this.vy = -20;
			this.vx = 0;
			if(ship.weaponStr === 1) {
				this.h = 45;
				this.w = 5;
				this.x = ship.x - this.w/2;
				this.y = ship.y;
				this.power = ship.weaponStr * 10;
			} else if(ship.weaponStr === 2) {
				this.h = 55;
				this.w = 10;
				this.x = ship.x - this.w/2; 
				this.y = ship.y;
				this.power = ship.weaponStr * 10;
			} else if(ship.weaponStr === 3) {
				this.h = 75;
				this.w = 15;
				this.x = ship.x - this.w/2; 
				this.y = ship.y;
				this.power = ship.weaponStr * 10;
			} else if(ship.weaponStr === 4) {
				this.h = 75;
				this.w = 25;
				this.x = ship.x - this.w/2; 
				this.y = ship.y;
				this.power = ship.weaponStr * 10;
			} else if(ship.weaponStr === 5) {
				this.h = 75;
				this.w = 35;
				this.x = ship.x - this.w/2; 
				this.y = ship.y;
				this.power = ship.weaponStr * 10;
			} else if(ship.weaponStr === 6) {
				this.h = 75;
				this.w = 75;
				this.x = ship.x - this.w/2; 
				this.y = ship.y;
				this.power = ship.weaponStr * 10;
			}
		}



		// --------------------- //
		// --- ENEMY WEAPONS --- //
		// --------------------- //

		if(ship.weaponType === 'ball') {
			this.class = 'enemy';
			this.vy = ship.vy;
			this.vx = ship.vx;
			this.x = ship.x;
			this.y = ship.y;
			this.w = 10;
			this.h = 10;
		
		}
	}

	draw() {
		this.x += this.vx;
		this.y += this.vy;
		this.context.save();
		this.context.fillStyle = 'blue';
		this.context.translate(this.x, this.y);
		this.context.fillRect(0, 0, this.w, this.h);
		this.context.restore();
	}
}
