window.getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max-min)) + min;
}

window.getPosition = (object) => {
	let x = object.x;
	let y = object.y;
	return {x: x, y: y}
}

window.getDistance = (point1, point2) => {
	return	Math.sqrt( (point1.x - point2.x)**2 + (point1.y - point2.y)**2 );
}
