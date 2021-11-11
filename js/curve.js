class Curve extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super()
        this.contextReal = contextReal,
        this.contextDraft = contextDraft
    }
    onMouseDown(coord, event) {
        this.contextReal.fillStyle = fontColor
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord, event) {
        this.contextDraft.fillStyle = fontColor
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        // this.canvasDraft.quadraticCurveTo(coord[0], coord[1], this.endX, this.endY)
        // console.log(this.origX)
        this.contextDraft.stroke()
    }
    onMouseMove(coord, event) {
        let controlPointX = coord[0];
        let controlPointY = coord[1];
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        // this.contextReal.beginPath();
        // this.context.moveTo(this.origX, this.origY);
        this.contextDraft.quadraticCurveTo(controlPointX, controlPointY, this.endX, this.endY)
        this.contextDraft.stroke()
    }

    onMouseUp(coord, event) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.endX = coord[0];
        this.endY = coord[1];
        // this.contextReal.beginPath();
        // this.contextReal.moveTo(this.origX, this.origY);
        this.contextReal.quadraticCurveTo(controlPointX, controlPointY, this.endX, this.endY)
        this.contextReal.stroke()
        console.log(this.origX)
        
    }
}