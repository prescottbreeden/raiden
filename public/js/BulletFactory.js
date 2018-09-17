class BulletFactory {
	constructor(canvas, ship) {
		this.canvas = canvas;
		this.context = this.canvas.getContext('2d');
		this.ship = ship;

		this.bullets = [];

	}

	generateBullets(interval) {
		const bullet = new Bullet(this.canvas, this.ship);
		this.bullets.push(bullet);
	}
}
