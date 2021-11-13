class DrawingLine extends PaintFunction {
  constructor(contextReal) {
    super();
    this.context = contextReal;
  }
  onMouseDown(coord) {
    this.context.lineJoin = "round";
    this.context.lineWidth = localStorage.size;
    this.context.beginPath();
    this.context.moveTo(coord[0], coord[1]);
  }
  onDragging(coord) {
    this.draw(coord[0], coord[1]);
  }
  onMouseUp() {
    let lastMove = canvasReal.toDataURL();
    undoDataStack.push(lastMove);
    redoDataStack = [];
  }
  draw(x, y) {
    this.context.lineTo(x, y);
    this.context.strokeStyle = localStorage.color;
    this.context.stroke();
  }
}
