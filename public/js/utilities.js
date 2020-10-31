const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min)) + min;
}

const randomString = () => {
  return Math.random()
    .toString(36)
    .substring(7);
}

const isOnScreen = (object) => {
  const { x, y } = object;
  const onScreen = (y > 0 && y < window.innerHeight) && (x > 0 && x < 800);
  return onScreen;
}

const getPosition = (object) => {
  let x = object.x;
  let y = object.y;
  return {x: x, y: y}
}

const getDistance = (object1, object2) => {
  return	Math.sqrt((object1.x-object2.x)**2 + (object1.y-object2.y)**2);
}

const getPointDistance = (x1, y1, x2, y2) => {
  return	Math.sqrt((x1-x2)**2 + (y1-y2)**2);
}

const getDistanceBetweenCenters = (obj1, obj2) => {
  const centerX1 = obj1.x - obj1.w/2;
  const centerY1 = obj1.y - obj1.h/2;
  const centerX2 = obj2.x - obj1.w/2;
  const centerY2 = obj2.y - obj1.h/2;
  const distance = getPointDistance(centerX1, centerY1, centerX2, centerY2);
  return distance;
}

/**
 *  compose :: ((a -> b), (b -> c),  ..., (y -> z)) -> a -> z
 */
const compose = (...fns) => (...args) => 
  fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];

/**
 *  curry :: ((a, b, ...) -> c) -> a -> b -> ... -> c
 */
function curry(fn) {
  const arity = fn.length;

  return function $curry(...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }

    return fn.call(null, ...args);
  };
}

/**
 *  add :: a -> b -> a + b
 */
const add = curry((x, y) =>  x + y);

/**
 *  log :: a -> a
 */
const log = curry((name, arg) => { console.log(name, arg); return arg; });

/**
 *  head :: [a] -> a
 */
const head = xs => xs[0];

/**
 *  filter :: (a -> Bool) -> [a] -> [a]
 */
const filter = curry((f, xs) => xs.filter(f));

/**
 *  map :: (a -> b) -> [a] -> [b]
 */
const map = curry((f, xs) => xs.map(f));

/**
 *  reduce :: ((b, a) -> b) -> b -> [a] -> b
 */
const reduce = curry((f, x, xs) => xs.reduce(f, x));

/**
 *  id :: a -> a
 */
const id = x => x;

/**
 *  prop :: String -> Object -> a
 */
const prop = curry((p, obj) => obj[p]);
