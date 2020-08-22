const PIXI = require('pixi.js');

const appConfig = require('./appConfig');
const debounce = require('./util/debounce');
const scaleToWindow = require('../../lib/scaleToWindow');

let app = new PIXI.Application(appConfig);
document.body.appendChild(app.view);
app.renderer.autoResize = true;
let resizeCallback = debounce(scaleToWindow.bind(this, app.renderer.view), 300, false);
resizeCallback();
window.addEventListener('resize', resizeCallback, { passive: true });
