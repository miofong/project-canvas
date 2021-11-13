let redoCheck = [`rectangle`, `circle`, `polygon`, `pen`, `eraser`, `line`, `curve`, `text`, `undo`, `redo`, `clear`, `download`];
$("#redo").click(function redo() {

});

$("#redo").click(() => {
    if (localStorage.pressed !== `redo`) {
        localStorage.pressed = `redo`;
    };
    for (i = 0; i < redoCheck.length; i++) {
        if (localStorage.pressed !== redoCheck[i]) {
            $(`#${redoCheck[i]}`).css("opacity", "0.5");
            $(`#${redoCheck[i]}`).css("box-shadow", "0 0 8px 0 rgba(255, 255, 255, 0.5)");
            $("#textBox").remove();
        } else {
            $(`#${localStorage.pressed}`).css("opacity", "1");
            $(`#${localStorage.pressed}`).css("box-shadow", "0 0 8px 0 rgba(255, 255, 255, 1)");
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
    }
});