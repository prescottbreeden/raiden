class EnemyFactory {
	constructor(game) {
		this.game = game;
		this.canvas = game.canvas;

		this.enemies = [];
		this.createAllEnemies();

		this.addEnemy = () => {
			const enemy = new Enemy('blackbird', this.game);
			this.enemies.push(enemy);
		}

	}

	createAllEnemies() {
		setInterval(this.addEnemy, 4000);
	}
}
