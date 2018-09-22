class BulletFactory {
	constructor(game, ship) {
		this.game = game;
		this.canvas = game.canvas;
		this.context = game.context;
		this.ship = ship;
		this.bullets = [];

		// BLASTER
		this.blasterShot = () => {
			let bullet = new Blaster(this.game, this.ship);
			this.bullets.push(bullet);
		}
		
		// SPREAD SHOT
		this.spreadShot = () => {
			const bullet = new Spread(this.game, this.ship, this.ship.x - 2.5);
			this.bullets.push(bullet);
			if(this.ship.weaponStr > 1) {
				let spacing = this.ship.w/2;
				const bullet3 = new Spread(this.game, this.ship, this.ship.x - spacing, this.ship.y+this.ship.h/2);
					const bullet4 = new Spread(this.game, this.ship, this.ship.x + spacing-5, this.ship.y+this.ship.h/2);
					this.bullets.push(bullet3);
					this.bullets.push(bullet4);

			}
			if(this.ship.weaponStr > 2) {
				let spacing = this.ship.w/4;
				const bullet5 = new Spread(this.game, this.ship, this.ship.x - spacing);
				const bullet6 = new Spread(this.game, this.ship, this.ship.x + spacing-5);
					this.bullets.push(bullet5);
					this.bullets.push(bullet6);
			}
			if(this.ship.weaponStr > 3) {
				console.log('now the tricky part');
			}
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
