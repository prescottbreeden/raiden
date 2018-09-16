class CloudFactory {
	constructor(canvas) {
		this.canvas = canvas;
		this.context = this.canvas.getContext('2d');

		this.minFreq = 3000;
		this.maxFreq = 5000;
		this.clouds = [];
	}

	generateClouds() {
		const interval = getRandomInt(this.minFreq, this.maxFreq);
		const cloudFactory = this;

		setInterval(function() {
			const cloud = new Cloud(cloudFactory.canvas);
			cloudFactory.clouds.push(cloud);
		}, interval);
	}
}
