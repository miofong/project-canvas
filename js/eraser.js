/**********************************************
 * Drawing Line Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in common
 * Remember, order matters
 ***********************************************/

let fontRangeBar = document.getElementById("font-range");
let fontSizeNumber = document.getElementById("font-size-number");
fontSizeNumber.innerHTML = fontRangeBar.value;
fontSize = 12;
fontRangeBar.oninput = function () {
  fontSizeNumber.innerHTML = this.value;
  fontSize = this.value;
};

class Erasing extends PaintFunction {
  // This class extends the PaintFunction class
  // You are only passing one instance here

  constructor(contextReal) {
    super();
    this.context = contextReal;
  }

  // On mouse down, ensure that the pen has these features
  onMouseDown(coord, event) {
    // Fill in the color
    //   this.context.strokeStyle = "#df4b26";
    // Kind of line
    this.context.lineJoin = "round";
    // Width of line
    this.context.lineWidth = fontSize;
    // Drawing the line here
    this.context.beginPath();
    this.context.moveTo(coord[0], coord[1]);
  }
  // Clicking and removing your mouse
  onDragging(coord, event) {
    this.draw(coord[0], coord[1]);
    this.context.globalCompositeOperation = "destination-out";
  }

  onMouseMove() {}
  onMouseUp(coord, event) {
    // undo redo functions
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
    // Draw the line onto the page
    this.context.stroke();
  }
}
