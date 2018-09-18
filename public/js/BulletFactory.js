class BulletFactory {
	constructor(game, ship) {
		this.game = game;
		this.canvas = game.canvas;
		this.context = game.context;
		this.ship = ship;

		this.bullets = [];

	}

	generateBullets(interval) {
		const bullet = new Bullet(this.game, this.ship);
		this.bullets.push(bullet);
	}
}
