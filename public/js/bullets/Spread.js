class Spread extends Bullet {
	constructor(game, ship) {
		super(game, ship);

		this.class = 'player';
		this.vy = -20;
		this.vx = 0;
		this.power = ship.weaponStr * 4;
		this.w = 5;
		this.h = 10;
		// this.x = ship.x - this.w;
		this.x = ship.x - this.w/2;
		this.y = ship.y;

	}

	draw() {
		this.x += this.vx;
		this.y += this.vy;
		this.context.save();
		this.context.fillStyle = 'red';
		this.context.translate(this.x, this.y);
		this.context.fillRect(0, 0, this.w, this.h);
		this.context.restore();
	}
}
