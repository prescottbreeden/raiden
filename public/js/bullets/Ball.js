class Ball extends Bullet {
	constructor(game, ship) {
		super(game, ship);

		this.class = 'enemy';
		this.vy = ship.vy;
		this.vx = ship.vx;
		this.x = ship.x;
		this.y = ship.y;
		this.w = 10;
		this.h = 10;
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
