class Sound {
	constructor(src) {
		this.src = src;
		this.create();
	}

	create() {
		let sound = new Audio();
		sound.src = this.src;
		sound.play();
	}
}
