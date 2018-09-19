class Enemy {
	constructor(game) {
		this.game = game;
		this.canvas = game.canvas;
		this.context = game.context;
		this.playerPosition = getPosition(game.player);

		this.getAngle();
		// specs
	}

	getAngle() {
		this.angle = Math.atan2(this.playerPosition.y - this.y, this.playerPosition.x - this.x) - 3.141 / 2;
	}

	shoot(delay) {
		let game = this.game;
		let enemy = this;
		setTimeout(function() {
			if(enemy.hp <= 0) { return; }
			const pew = new Audio();
			pew.src = 'public/music/retro-shot-blaster.mp3';
			pew.play();
			const bullet = new Ball(game, enemy);
			const player = getPosition(game.player);
			const distance = getDistance(game.player, enemy);
			bullet.vx = (player.x - enemy.x)/distance*enemy.weaponSpeed;
			bullet.vy = (player.y - enemy.y)/distance*enemy.weaponSpeed;
			game.bulletFactory.bullets.push(bullet);
		}, delay)

	}



}
