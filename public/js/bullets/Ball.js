class Ball extends Bullet {
  constructor(game, ship) {
    super(game, ship);

    this.class = 'enemy';
    this.vy = ship.vy;
    this.vx = ship.vx;
    this.x = ship.x;
    this.y = ship.y;
    this.w = 20;
    this.h = 20;
    this.img = null;
    this.src = 'public/images/weaponfire/RLiGng-fireball-transparent-picture.png';

    this.create();
  }
  create() {
    this.img = new Image();
    this.img.src = this.src;
  }

  draw() {
    this.x += this.vx;
    this.y += this.vy;
    this.context.save();
    this.context.translate(this.x, this.y);
    this.context.drawImage(this.img, -(this.w/2), -(this.h/2), this.h, this.w);
    this.context.restore();
  }
}
