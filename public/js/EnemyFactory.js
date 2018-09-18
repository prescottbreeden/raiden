class EnemyFactory {
	constructor(game) {
		this.game = game;
		this.canvas = game.canvas;

		this.enemies = [];
		this.createAllEnemies();

		this.addBlackbird = () => {
			const enemy = new Enemy('blackbird', this.game);
			this.enemies.push(enemy);
		}

		this.addSpacestation = () => {
			const enemy = new Enemy('spacestation', this.game);
			this.enemies.push(enemy);
		}

	}

	createAllEnemies() {
		setInterval(this.addBlackbird, 4000);
		setInterval(this.addSpacestation, 10000);
	}
}
