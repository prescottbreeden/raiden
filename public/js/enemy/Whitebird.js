class Whitebird extends Enemy {
  constructor(game) {
    super(game);

    // specs
    this.tracking = true;
    this.contain = false;
    this.spin = false;
    this.item = false;
    this.h = 100;
    this.w = 100;
    this.r = this.w/2.1;
    this.x = getRandomInt(this.canvas.width*.1, this.canvas.width*.9);
    this.y = -this.h;
    this.weaponSpeed = 8;
    this.vy = game.getVelocity() * 8;
    this.g = -.05;
    if(this.x >= this.canvas.width/2) {
      this.vx = 1;
    } else {
      this.vx = -1;
    }
    this.src = 'public/images/whitebird.png';
    this.img = null;
    this.weaponType = 'ball';
    this.fireDelay = 1000;
    this.hp = 10;
    this.shoot(this.fireDelay);
    this.shoot(this.fireDelay*2);

    this.create();
  }

  create() {
    this.img = new Image();
    this.img.src = this.src;
  }

  draw() {
    this.drawCenter();
    this.vy += this.g;
    this.y += this.vy;
    this.x += this.vx;

    if(this.contain) {
      if(this.y+this.h > this.canvas.height && this.vy > 0) { 
        this.y = this.canvas.height-this.h;
        this.vy *= -1;
      }
      if(this.y < this.h/2 && this.vy < 0) { 
        this.y = this.h/2;
        this.vy *= -1;
      }
      if(this.x < this.w/2 && this.vx < 0) {
        this.x = this.w/2;
        this.vx *= -1;
      }
      if(this.x + this.w/2 > this.canvas.width && this.vx > 0) {
        this.x = this.canvas.width - this.w/2;
        this.vx *= -1;
      }
    }

    this.context.save();
    this.context.translate(this.x, this.y);

    if(this.tracking) {
      this.playerPosition = getPosition(this.game.player);
      this.getAngle();
      this.context.rotate(this.angle);
    }

    if(this.spin) {
      this.angle+=5; 
      this.context.rotate(this.angle);
    }

    this.context.drawImage(this.img, -(this.w/2), -(this.h/2), this.h, this.w);
    this.context.restore();

  }
}
