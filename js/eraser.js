class Erasing extends PaintFunction {
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
        this.context.globalCompositeOperation = "destination-out";
    }
    onMouseUp() {
        let lastMove = canvasReal.toDataURL();
        undoDataStack.push(lastMove);
        redoDataStack = [];
        this.context.globalCompositeOperation = "source-over";
    }
    draw(x, y) {
        this.context.lineTo(x, y);
        this.context.stroke();
    }
}