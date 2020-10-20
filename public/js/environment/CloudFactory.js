class CloudFactory {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');

    this.minFreq = 2000;
    this.maxFreq = 5000;
    this.clouds = [];
  }

  generateClouds() {
    const interval = getRandomInt(this.minFreq, this.maxFreq);
    const self = this;

    setInterval(function() {
      const cloud = new Cloud(self.canvas);
      const cleanUp = self.clouds.filter(isOnScreen);
      self.clouds = [...cleanUp, cloud];
    }, interval);
  }
}
