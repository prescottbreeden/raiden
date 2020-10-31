class Enemy {
  constructor(game) {
    this.game = game;
    this.canvas = game.canvas;
    this.context = game.context;
    this.playerPosition = getPosition(game.player);

    this.getAngle();
    // specs
  }

  getAngle() {
    this.angle = Math.atan2(this.playerPosition.y - this.y, this.playerPosition.x - this.x) - 3.141 / 2;
  }

  drawCenter() {
    let centerX = this.x;
    let centerY = this.y;
    this.context.save();
    this.context.beginPath();
    this.context.strokeStyle = 'yellow';
    this.context.arc(centerX, centerY, 50, 0, 360*radian);
    this.context.stroke();
    this.context.restore();
  }

}
