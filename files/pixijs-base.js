
const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;

var keysDown = [];
var pressedKeys = {}; 
let mouse_x, mouse_y;

const bodyWidth = document.querySelector("body").offsetWidth;
const bodyHeight = document.querySelector("body").offsetHeight;

let app = new PIXI.Application({ width: bodyWidth, height: bodyHeight });
// let sprite = PIXI.Sprite.from('image.extension');

document.body.appendChild(app.view);
//app.stage.addChild(sprite);
//app.renderer.plugins.interaction.cursorStyles.default = 'pointer';

let elapsed = 0.0;
app.ticker.add((delta) => { // gets called every frame
    elapsed += delta;
    keysDown = getPressedKeys();
    //sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;

});

function distance2d(x1, y1, x2, y2) {
    let a = x1 - x2;
    let b = y1 - y2;
    let c = Math.sqrt( a*a + b*b );
    return c
}

function isColliding(spriteA, spriteB) {
    let boxA = spriteA.getBounds();
    let boxB = spriteB.getBounds();  
    return (boxA.top <= boxB.bottom && boxA.bottom >= boxB.top) &&
      (boxA.left <= boxB.right && boxA.right >= boxB.left);
}

  
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function getPressedKeys() {
    const keys = []; 
  
    for (const keyCode in pressedKeys) {
      if (pressedKeys[keyCode]) {
        keys.push(keyCode);
      }
    }
  
    return keys; 
}

document.addEventListener('keydown', function(event) {
  pressedKeys[event.keyCode] = true; 
});

document.addEventListener('keyup', function(event) {
  delete pressedKeys[event.keyCode]; 
});

document.addEventListener('mousemove', (event) => {
    //mousePos = { x: event.clientX, y: event.clientY };
    //mousePosText.textContent = `(${mousePos.x}, ${mousePos.y})`;
    mouse_x = event.clientX
    mouse_y = event.clientY
});
