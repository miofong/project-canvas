class DrawingCircle extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super()
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
    onMouseDown(coord) {
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord) {
        let radiusX = Math.abs(this.origX - coord[0]);
        let radiusY = Math.abs(this.origY - coord[1]);
        this.contextDraft.clearRect(
            0,
            0,
            canvasDraft.width,
            canvasDraft.height
        );
        this.contextDraft.fillStyle = localStorage.color;
        this.contextDraft.beginPath();
        this.contextDraft.ellipse(this.origX, this.origY, radiusX, radiusY, 0, 0, Math.PI * 2)
        this.contextDraft.fill();
    }
    onMouseUp(coord) {
        let radiusX = Math.abs((this.origX - coord[0]))
        let radiusY = Math.abs((this.origY - coord[1]))
        this.contextDraft.clearRect(
            0,
            0,
            canvasDraft.width,
            canvasDraft.height
        );
        this.contextReal.fillStyle = localStorage.color;
        this.contextReal.beginPath();
        this.contextReal.ellipse(this.origX, this.origY, radiusX, radiusY, 0, 0, Math.PI * 2)
        this.contextReal.fill();
        let lastMove = canvasReal.toDataURL();
        undoDataStack.push(lastMove);
        redoDataStack = [];
    }
}