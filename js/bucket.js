class Bucket extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft
        this.pixelStack = [];
        this.imgData;
        this.clickPoint;
        this.red;
        this.green;
        this.blue;
        this.rgb;
        this.test = [];
        this.result;
        this.paintimg = new Image
        this.paintimg.src = 'img/bucketIcon.png'
    }
    onMouseDown(coord) {
        let c = "black";
        let color = c.match(/\d+/g);
        this.rgb = color;
        this.imgData = this.contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height);
        this.checkColor(coord);
        this.colorCombining();
        this.compare();
        if (this.result == true) {
            this.test = [];
        }
        else if (this.result == false) {
            this.floodFill(coord);
            this.contextReal.putImageData(this.imgData, 0, 0);
            this.test = [];
        }
    }
    onMouseMove(coord) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.drawImage(this.paintimg, coord[0] - 100 / 2, coord[1] - 100 / 2, 100, 100);
    }
    onMouseLeave() {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    }
    compare() {
        let arr1 = this.rgb
        let arr2 = this.test
        if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
            this.result = true;
        } else if (JSON.stringify(arr1) != JSON.stringify(arr2)) {
            this.result = false;
        }
    }
    colorCombining() {
        this.test.push(this.red + "");
        this.test.push(this.green + "");
        this.test.push(this.blue + "");
    }
    checkColor(coord) {
        this.clickPoint = (coord[1] * canvasReal.width + coord[0]) * 4;
        this.red = this.imgData.data[this.clickPoint];
        this.green = this.imgData.data[this.clickPoint + 1];
        this.blue = this.imgData.data[this.clickPoint + 2];
    }
    floodFill(coord) {
        let newPos,
            x,
            y,
            pixelPos,
            reachLeft,
            reachRight
        this.pixelStack.push(coord)
        while (this.pixelStack.length) {
            newPos = this.pixelStack.pop();
            x = newPos[0];
            y = newPos[1];
            pixelPos = (y * canvasReal.width + x) * 4;
            while (y >= 0 && this.matchStartColor(pixelPos)) {
                y -= 1;
                pixelPos -= canvasReal.width * 4;
            }
            pixelPos += canvasReal.width * 4;
            y += 1;
            reachLeft = false;
            reachRight = false;
            //while (y <= canvasReal.height - 1 && this.matchStartColor(pixelPos)) {
            //    this.colorPixel(pixelPos);
            //    y += 1;
            //    if (x > 0) {
            //        if (this.matchStartColor(pixelPos - 4)) {
            //            if (!reachLeft) {
            //                this.pixelStack.push([x - 1, y])
            //                reachLeft = true;
            //            }
            //        } else if (reachLeft) {
            //            reachLeft = false;
            //        }
            //    }
            //    if (x < canvasReal.width - 1) {
            //        if (this.matchStartColor(pixelPos + 4)) {
            //            if (!reachRight) {
            //                this.pixelStack.push([x + 1, y]);
            //                reachRight = true;
            //            }
            //        } else if (reachRight) {
            //            reachRight = false;
            //        }
            //    }
            //    pixelPos += canvasReal.width * 4;
            //}
        }
    }
    matchStartColor(pixelPos) {
        let re = this.imgData.data[pixelPos];
        let gr = this.imgData.data[pixelPos + 1];
        let bl = this.imgData.data[pixelPos + 2];
        return (re === this.red && gr === this.green && bl === this.blue);
    }
    colorPixel(pixelPos) {
        this.imgData.data[pixelPos] = 0;
        this.imgData.data[pixelPos + 1] = 0;
        this.imgData.data[pixelPos + 2] = 0;
        this.imgData.data[pixelPos + 3] = 255;
    }
}