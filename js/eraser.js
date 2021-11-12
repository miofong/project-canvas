let fontRangeBar = document.getElementById("font-range");
let fontSizeNumber = document.getElementById("font-size-number");
fontSizeNumber.innerHTML = fontRangeBar.value;
fontSize = 12;
fontRangeBar.oninput = function () {
  fontSizeNumber.innerHTML = this.value;
  fontSize = this.value;
};

class Erasing extends PaintFunction {
  constructor(contextReal) {
    super();
    this.context = contextReal;
  }

  onMouseDown(coord, event) {
    this.context.lineJoin = "round";
    this.context.lineWidth = fontSize;
    this.context.beginPath();
    this.context.moveTo(coord[0], coord[1]);
  }

  onDragging(coord, event) {
    this.draw(coord[0], coord[1]);
    this.context.globalCompositeOperation = "destination-out";
  }

  onMouseMove() {}
  onMouseUp(coord, event) {
    var lastMove = canvasReal.toDataURL();
    undoDataStack.push(lastMove);
    redoDataStack = [];

    this.context.globalCompositeOperation = "source-over";
  }
  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    //
    this.context.lineTo(x, y);
    this.context.stroke();
  }
}
