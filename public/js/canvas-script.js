const WIDTH = 800;
const HEIGHT = window.innerHeight-50; 

window.onload = () => {
  console.log('success');
  const button = document.createElement('button');
  button.className = 'start-btn';
  button.id = 'start-btn';
  button.onclick = buildGame;
  button.textContent = "Start New Game";
  const gameNode = document.getElementById('game');
  gameNode.appendChild(button);
}

function buildGame() {
  const gameNode = document.getElementById('game');
  gameNode.removeChild(document.getElementById('start-btn'))
  const canvas = document.createElement('canvas');
  canvas.id = 'ctx';
  canvas.className = 'canvas';
  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  const GAME = new Game(canvas);
  GAME.start();
  gameNode.appendChild(canvas);
}
