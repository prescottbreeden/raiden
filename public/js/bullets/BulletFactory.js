class BulletFactory {
	constructor(game, ship) {
		this.game = game;
		this.canvas = game.canvas;
		this.context = game.context;
		this.ship = ship;

		this.bullets = [];

		this.blasterShot = () => {
			const bullet = new Blaster(this.game, this.ship);
			this.bullets.push(bullet);
		}
		
		this.spreadShot = () => {
			const bullet = new Spread(this.game, this.ship);
			this.bullets.push(bullet);
		}
	}
	
	generatePlayerBullets() {
		const weapon = this.game.player.weaponType;
		if(weapon === 'blaster') {
			this.blasterShot();
		}
		if(weapon === 'spread') {
			this.spreadShot();
		}
	}

	generateEnemyBullets(interval) {
		
	
	}

}
