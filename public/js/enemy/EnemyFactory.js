class EnemyFactory {
  constructor(game) {
    this.game = game;
    this.canvas = game.canvas;

    this.enemies = [];
    this.createAllEnemies();
  }

  addEnemy = (...enemies) => {
    const cleanUp = this.enemies.filter(isOnScreen);
    this.enemies = [...cleanUp, ...enemies];
  }

  addBlackbird = () => {
    const enemy = new Blackbird(this.game);
    this.addEnemy(enemy);
  }

  addWhitebird = () => {
    const enemy = new Whitebird(this.game);
    this.addEnemy(enemy);
  }

  addSpacestation = () => {
    const enemy = new SpaceStation(this.game);
    this.addEnemy(enemy);
  }

  createAllEnemies() {
    setInterval(this.addBlackbird, 4000);
    setInterval(this.addWhitebird, 3500);
    setInterval(this.addSpacestation, 10000);
  }
}
