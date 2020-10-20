class ItemFactory {
  constructor(game) {
    this.game = game;
    this.canvas = game.canvas;
    this.context = game.context;

    this.items = [];

  }

  generateItem(enemy) {
    const item = new Item(this.game, enemy);
    this.items.push(item);
  }
}
