class Explosion {
  constructor(game, enemy) {
    this.game = game;
    this.canvas = game.canvas;
    this.context = game.context;
    this.src = 'public/images/explosion.png';
    this.img = null;
    this.col = 0;
    this.row = 0;
    this.x = enemy.x;
    this.y = enemy.y;
    this.vy = enemy.vy;
    this.vx = enemy.vx;
    this.w = 100;
    this.h = 100;
    this.id = randomString();

    this.create();
  }

  create() {
    this.img = new Image();
    this.img.src = this.src;
  }

  draw() {
    if(this.img != null) {
      this.y += this.vy;
      this.x += this.vx;
      this.context.drawImage(this.img, 100*this.col, 100*this.row, 100, 100, this.x-50, this.y-50, this.w, this.h);
      this.col++;
      if(this.col === 9) {
        this.row++;
        this.col %= 9;
      }
    }

  }


}
