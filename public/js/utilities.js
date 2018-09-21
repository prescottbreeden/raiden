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

window.getDistance = (object1, object2) => {
	return	Math.sqrt((object1.x-object2.x)**2 + (object1.y-object2.y)**2);
}

window.getPointDistance = (x1, y1, x2, y2) => {
	return	Math.sqrt((x1-x2)**2 + (y1-y2)**2);
}

window.getDistanceBetweenCenters = (obj1, obj2) => {
	const centerX1 = obj1.x - obj1.w/2;
	const centerY1 = obj1.y - obj1.h/2;
	const centerX2 = obj2.x - obj1.w/2;
	const centerY2 = obj2.y - obj1.h/2;
	const distance = getPointDistance(centerX1, centerY1, centerX2, centerY2);
	return distance;
}
