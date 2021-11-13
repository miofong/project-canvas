class Line extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
    onMouseDown(coord) {
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height)
        this.contextDraft.lineWidth = localStorage.size;
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY)
        this.contextDraft.lineTo(coord[0], coord[1])
        this.contextDraft.strokeStyle = localStorage.color;
        this.contextDraft.stroke()
    }
    onMouseUp(coord) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height)
        this.contextReal.lineWidth = localStorage.size;
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX, this.origY)
        this.contextReal.lineTo(coord[0], coord[1])
        this.contextReal.strokeStyle = localStorage.color;
        this.contextReal.stroke()
        let lastMove = canvasReal.toDataURL();
        undoDataStack.push(lastMove);
        redoDataStack = [];
        this.context.globalCompositeOperation = "source-over";
    }

}