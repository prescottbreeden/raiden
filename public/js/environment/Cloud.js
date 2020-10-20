class Cloud {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');

    // specs
    this.h = 200;
    this.w = 300;
    this.x = getRandomInt(0, this.canvas.width-this.w);
    this.y = 0 - this.h;
    this.src = 'public/images/clouds.png';
    this.img = null;

    this.create();
  }

  create() {
    this.img = new Image();
    this.img.src = this.src;
  }

  draw() {
    if(this.img != null) {
      this.context.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
  }
}
