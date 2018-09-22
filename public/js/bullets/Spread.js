class Spread extends Bullet {
	constructor(game, ship, x=0, y=0) {
		super(game, ship);

		this.class = 'player';
		this.ship - ship;
		this.vy = -20;
		this.vx = 0;
		this.power = ship.weaponStr * 4;
		this.w = 5;
		this.h = 10;
		// this.x = ship.x - this.w;
		x !== 0 ? this.x = x : this.x = ship.x - this.w/2;
		y !== 0 ? this.y = y : this.y = ship.y;

	}

	draw() {
		this.y += this.vy;
		this.x += this.vx;
		this.context.save();
		this.context.translate(this.x, this.y);
		this.context.fillStyle = 'purple';
		this.context.fillRect(0, 0, this.w, this.h)	
		this.context.restore();

	}


}
