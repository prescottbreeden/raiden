class Blaster extends Bullet {
  constructor(game, ship) {
    super(game, ship);

    this.class = 'player';
    this.vy = -20;
    this.vx = 0;

    switch (ship.weaponStr) {
      case 1:
        this.h = 45;
        this.w = 5;
        break;
      case 2:
        this.h = 55;
        this.w = 10;
        break;
      case 3:
        this.h = 75;
        this.w = 15;
        break;
      case 4:
        this.h = 75;
        this.w = 25;
        break;
      case 5:
        this.h = 75;
        this.w = 35;
        break;
      case 6:
        this.h = 75;
        this.w = 75;
        break;
    }

    this.x = ship.x - this.w/2;
    this.y = ship.y;
    this.power = ship.weaponStr * 10;
  }

  drawCenter() {
    this.context.save();
    this.context.fillStyle = 'green';
    this.context.translate(this.x, this.y);
    this.context.fillRect(this.w/2, 0, this.w/2, this.h);
    this.context.restore();

  }

  draw() {
    this.x += this.vx;
    this.y += this.vy;
    this.context.save();
    this.context.fillStyle = 'blue';
    this.context.translate(this.x, this.y);
    this.context.fillRect(0, 0, this.w, this.h);
    this.context.restore();
  }
}
