const INITIAL = 1;
const GAME_PLAYING = 2;
const GAME_OVER = 3;
const KEY_CODE = {
	left: 37,
	up: 38,
	right: 39,
	down: 40,
	space: 32,
	enter: 13,
	f: 70,
	d: 68,
	s: 83,
	a: 65
}


class Game {
	constructor(canvas) {
		this._currentState = INITIAL;
		this._velocity = 5;
		this.canvas = canvas;
		this.context = this.canvas.getContext('2d');

		//get-set State
		this.getState = () => this._currentState;
		this.setState = (newState) => this._currentState = newState;

		// get-set Velocity
		this.getVelocity = () => this._velocity;
		this.setVelocity = (newVelocity) => this._velocity = newVelocity;

		// bind event listeners
		this.bindEvents();

		// create Game objects
		this.createObjects();
	}

	start() {
		window.requestAnimationFrame(() => {
			this.runGameLoop();
		})
	}


	runGameLoop() {
		switch(this.getState()) {
			case INITIAL:
				this.drawMenuScreen();
				break;
			case GAME_PLAYING:
				this.drawGamePlayingScreen();
				break;
			case GAME_OVER:
				this.drawGameOverScreen();
				break;
		}
		window.requestAnimationFrame(() => {
			this.runGameLoop();
		})
	}


	bindEvents() {
		let game = this;
		console.log('balls');
		window.addEventListener('keydown', function(e) {
			if(e.keyCode === KEY_CODE.left) {
				console.log(e);
			}
			if(e.keyCode === KEY_CODE.up) {
				console.log(e);
			}
			if(e.keyCode === KEY_CODE.right) {
				console.log(e);
			}
			if(e.keyCode === KEY_CODE.down) {
				console.log(e);
			}
		})
	}


	createObjects() {

	}


	drawMenuScreen() {
		this.context.fillStyle = 'black';
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

		this.context.fillStyle = 'white';
		this.context.font = '36 Courier';
		this.context.fillText('Click to Start', this.canvas.width/2 -100, this.canvas.height/2);

	}


	drawGamePlayingScreen() {
		this.context.fillStyle = 'black';
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

		this.context.fillStyle = 'white';
		this.context.font = '36 Courier';
		this.context.fillText('playing game', this.canvas.width/2 -100, this.canvas.height/2);

	}


	drawGameOverScreen() {
		this.context.fillStyle = 'black';
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

		this.context.fillStyle = 'white';
		this.context.font = '36 Courier';
		this.context.fillText('game over', this.canvas.width/2 -100, this.canvas.height/2);

	}


	checkCollisions() {

	}


	reset() {

	}




}

