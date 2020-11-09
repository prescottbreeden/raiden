class SpaceStation extends Enemy {
  constructor(game) {
    super(game);

    // specs
    this.tracking = false;
    this.contain = true;
    this.spin = true;
    this.item = true;
    this.h = 120;
    this.w = 120;
    this.r = this.w/2;
    this.x = getRandomInt(this.canvas.width*.1, this.canvas.width*.9);
    this.y = -this.h;
    this.g = 0;
    this.vy = game.getVelocity() * 2;
    this.vx = 1; 
    this.weaponSpeed = game.getVelocity() * 3;

    this.src = 'public/images/spacestation.png';
    this.img = null;
    this.weaponType = 'ball';
    this.fireDelay = 2000;
    this.hp = 100;
    this.shoot(this.fireDelay);
    this.shoot(this.fireDelay);
    this.shoot(this.fireDelay);

    this.getAngle();
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
