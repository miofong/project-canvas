class Curve extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super()
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.click = 0;
    }
    onMouseDown(coord) {
        if (this.click === 0) {
            this.origX = coord[0];
            this.origY = coord[1];
        }
    }
    onDragging(coord) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        if (this.click === 0) {
            this.contextDraft.lineWidth = localStorage.size;
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX, this.origY);
            this.contextDraft.lineTo(coord[0], coord[1]);
            this.contextDraft.strokeStyle = localStorage.color;
            this.contextDraft.stroke()
        } else if (this.click !== 0) {
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX, this.origY);
            this.contextDraft.quadraticCurveTo(coord[0], coord[1], this.endX, this.endY);
            this.contextDraft.strokeStyle = localStorage.color;
            this.contextDraft.stroke();
        }
    }
    onMouseUp(coord) {
        this.endX;
        this.endY;
        if (this.click === 0) {
            this.endX = coord[0];
            this.endY = coord[1];
            this.click++;
        } else if (this.click !== 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextReal.lineWidth = localStorage.size;
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.origX, this.origY);
            this.contextReal.quadraticCurveTo(coord[0], coord[1], this.endX, this.endY);
            this.contextReal.strokeStyle = localStorage.color;
            this.contextReal.stroke();
            this.click = 0;
        }
        let lastMove = canvasReal.toDataURL();
        undoDataStack.push(lastMove);
        redoDataStack = [];
    }
}
