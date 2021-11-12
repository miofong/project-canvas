class Curve extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super()
        this.contextReal = contextReal,
        this.contextDraft = contextDraft
        this.click = 0;
    }
    onMouseDown(coord, event) {
        if (this.click === 0) {
            this.origX = coord[0];
            this.origY = coord[1];
        }
    }

    onDragging(coord, event) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        if (this.click === 0) {
            contextDraft.beginPath();
            contextDraft.moveTo(this.origX, this.origY);
            contextDraft.lineTo(coord[0], coord[1]);
            contextDraft.stroke()
        } else if (this.click !== 0) {
            contextDraft.beginPath();
            contextDraft.moveTo(this.origX, this.origY);
            contextDraft.quadraticCurveTo(coord[0], coord[1], this.endX, this.endY);
            contextDraft.stroke();
        }
    }
    
    onMouseUp(coord, event) {
        this.endX;
        this.endY;
        if (this.click === 0) {
            this.endX = coord[0];
            this.endY = coord[1];
            this.click++;
            document.getElementById("canvas-draft").style.cursor = "move"
        } else if (this.click !== 0) {
            contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            contextReal.beginPath();
            contextReal.moveTo(this.origX, this.origY);
            contextReal.quadraticCurveTo(coord[0], coord[1], this.endX, this.endY);
            contextReal.stroke();
            this.click = 0;
            document.getElementById("canvas-draft").style.cursor = "default"
        }
        var lastMove = canvasReal.toDataURL();
        undoDataStack.push(lastMove);
        console.log(undoDataStack.length);
        redoDataStack = [];
    } 
}
