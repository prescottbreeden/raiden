window.onload = () => {
	console.log('success');
	const canvas = document.getElementById('ctx');
	const WIDTH = window.innerWidth-20;
	const HEIGHT = window.innerHeight-20; 
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	const game = new Game(canvas);
	game.start();

}
