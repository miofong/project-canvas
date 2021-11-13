let pointHistory = [];
let maxDifferernce = 15;
class Polygon extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super()
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
    onMouseDown(coord) {
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onMouseUp() {
        pointHistory.push({ x: this.origX, y: this.origY })
        let firstHistory = pointHistory[0];
        let lastHistory = pointHistory.slice(-1)[0]
        //mark point
        this.contextDraft.fillStyle = localStorage.color;
        this.contextDraft.beginPath();
        this.contextDraft.arc((this.origX), (this.origY), 5, 0, 2 * Math.PI);
        this.contextDraft.fill();
        if (pointHistory[1] !== undefined) {
            let [startPoint, endPoint] = pointHistory.slice(-2);
            //draw line
            this.contextDraft.lineWidth = 5;
            this.contextDraft.moveTo(startPoint.x, startPoint.y)
            this.contextDraft.lineTo(endPoint.x, endPoint.y)
            this.contextDraft.strokeStyle = localStorage.color;
            this.contextDraft.stroke();
            //finish polygon check overloap
            if ((Math.abs(lastHistory.x - firstHistory.x) < maxDifferernce && Math.abs(lastHistory.y - firstHistory.y) < maxDifferernce)) {
                //reset history
                this.contextDraft.clearRect(
                    0,
                    0,
                    canvasDraft.width,
                    canvasDraft.height
                );
                //save to real canvas
                this.contextReal.beginPath();
                this.contextReal.moveTo(firstHistory.x, firstHistory.y);
                for (let i = 0; i < pointHistory.length; i++) {
                    contextReal.lineTo((pointHistory[i].x), (pointHistory[i].y));
                }
                this.contextReal.fillStyle = localStorage.color;
                this.contextReal.fill();
                pointHistory = [];
            }
        }
        let lastMove = canvasReal.toDataURL();
        undoDataStack.push(lastMove);
        redoDataStack = [];
    }
}
