class EnemyFactory {
	constructor(game) {
		this.game = game;
		this.canvas = game.canvas;

		this.enemies = [];
		this.createAllEnemies();

		this.addBlackbird = () => {
			const enemy = new Blackbird(this.game);
			this.enemies.push(enemy);
		}

		this.addWhitebird = () => {
			const enemy = new Whitebird(this.game);
			this.enemies.push(enemy);
		}
		
		this.addSpacestation = () => {
			const enemy = new SpaceStation(this.game);
			this.enemies.push(enemy);
		}

	}

	createAllEnemies() {
		setInterval(this.addBlackbird, 4000);
		setInterval(this.addWhitebird, 2000);
		setInterval(this.addSpacestation, 10000);
	}
}
