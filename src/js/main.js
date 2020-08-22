const PIXI = require('pixi.js');

const type = PIXI.utils.isWebGLSupported() ? 'WebGL' : 'canvas';
PIXI.utils.sayHello(type);
