class Bullet {
	constructor(game, ship) {
		this.canvas = game.canvas;
		this.context = game.context;

		// specs
		
		// ---------------------- //
		// --- PLAYER WEAPONS --- //
		// ---------------------- //
		
		if(ship.weaponType === 'blaster') {
			this.class = 'player';
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
		this.context.fillStyle = 'blue';
		this.context.fillRect(this.x, this.y, this.w, this.h);
	}
}
