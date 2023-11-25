var myGamePiece;

function startGame() {
  myGameArea.start();
  myGamePiece = new component(myGameArea.context, 30, 30, "red", 10, 120);
}

// object to manage the canvas or game screen
var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

// object to manage the item inside the game
function component(context, width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function () {
    ctx = context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
  this.newPos = function () {
    this.x += this.speedX;
    this.y += this.speedY;
  };
}

// every period -> refresh ~ clear canvas + set new position of item base on the speed x and y + redraw the item
function updateGameArea() {
  myGameArea.clear();
  myGamePiece.newPos();
  myGamePiece.update();
}

// change the moving speed to up
function moveup() {
  myGamePiece.speedY -= 1;
}
// change the moving speed to down
function movedown() {
  myGamePiece.speedY += 1;
}
// change the moving speed to left
function moveleft() {
  myGamePiece.speedX -= 1;
}
// change the moving speed to right
function moveright() {
  myGamePiece.speedX += 1;
}
// stop all moving speed
function clearmove() {
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;
}
