let undoCheck = [`rectangle`, `circle`, `polygon`, `pen`, `bucket`, `eraser`, `line`, `curve`, `text`, `undo`, `clear`, `download`]
$("#undo").click(() => {
    if (localStorage.pressed !== `undo`) {
        localStorage.pressed = `undo`;
    };
    for (i = 0; i < undoCheck.length; i++) {
        if (localStorage.pressed !== undoCheck[i]) {
            $(`#${undoCheck[i]}`).css("opacity", "0.5");
            $(`#${undoCheck[i]}`).css("box-shadow", "0 0 8px 0 rgba(255, 255, 255, 0.5)");
            $("#textBox").remove();
        } else {
            $(`#${localStorage.pressed}`).css("opacity", "1");
            $(`#${localStorage.pressed}`).css("box-shadow", "0 0 8px 0 rgba(255, 255, 255, 1)");
            if (undoDataStack.length == 0) {
                return;
            } else if (undoDataStack.length == 1) {
                contextReal.fillStyle = "#ffffff";
                contextReal.fillRect(0, 0, canvasDraft.width, canvasDraft.height);
                contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
            } else if (undoDataStack.length > 1) {
                var lastStep = new Image();
                lastStep.src = undoDataStack[undoDataStack.length - 2];
                lastStep.onload = function () {
                    contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
                    contextReal.drawImage(lastStep, 0, 0);
                };
            }
            redoDataStack.push(undoDataStack.pop());
            $("#redo").click(function redo() {
                if (redoDataStack.length > 0) {
                    var nextStep = new Image();
                    contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
                    nextStep.src = redoDataStack[redoDataStack.length - 1];
                    nextStep.onload = function () {
                        contextReal.drawImage(nextStep, 0, 0);
                    };
                    undoDataStack.push(redoDataStack.pop());
                }
            });
            document.addEventListener("keydown", function (event) {
                if (event.ctrlKey && event.key === "z") {
                    if (undoDataStack.length == 0) {
                        return;
                    } else if (undoDataStack.length == 1) {
                        contextReal.fillStyle = "#ffffff";
                        contextReal.fillRect(0, 0, canvasDraft.width, canvasDraft.height);
                        contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
                    } else if (undoDataStack.length > 1) {
                        var lastStep = new Image();
                        lastStep.src = undoDataStack[undoDataStack.length - 2];
                        lastStep.onload = function () {
                            contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
                            contextReal.drawImage(lastStep, 0, 0);
                        };
                    }
                    redoDataStack.push(undoDataStack.pop());
                }
            });
            document.addEventListener("keydown", function (event) {
                if (event.ctrlKey && event.key === "y") {
                    if (redoDataStack.length > 0) {
                        var nextStep = new Image();
                        contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
                        nextStep.src = redoDataStack[redoDataStack.length - 1];
                        nextStep.onload = function () {
                            contextReal.drawImage(nextStep, 0, 0);
                        };
                        undoDataStack.push(redoDataStack.pop());
                    }
                }
            });
        }
    }
});