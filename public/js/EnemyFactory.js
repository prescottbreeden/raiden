class EnemyFactory {
	constructor(canvas) {
		this.canvas = canvas;
		console.log(this.canvas);

		this.enemies = [];
		this.createAllEnemies();

		this.addEnemy = () => {
			const enemy = new Enemy('public/images/black.png', this.canvas);
			this.enemies.push(enemy);
		}

	}

	createAllEnemies() {
		setInterval(this.addEnemy, 3000);
	}
}
