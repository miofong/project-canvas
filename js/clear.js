let clearCheck = [`rectangle`, `circle`, `polygon`, `pen`, `bucket`, `eraser`, `line`, `curve`, `text`, `undo`, `clear`, `download`]
$("#clear").click(() => {
    if (localStorage.pressed !== `clear`) {
        localStorage.pressed = `clear`;
    };
    for (i = 0; i < clearCheck.length; i++) {
        if (localStorage.pressed !== clearCheck[i]) {
            $(`#${clearCheck[i]}`).css("opacity", "0.5");
            $(`#${clearCheck[i]}`).css("box-shadow", "0 0 8px 0 rgba(0, 0, 0, 0.5)");
            $("#textBox").remove();
        } else {
            $(`#${localStorage.pressed}`).css("opacity", "1");
            $(`#${localStorage.pressed}`).css("box-shadow", "0 0 8px 0 rgba(0, 0, 0, 1)");
            contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
            let lastMove = canvasReal.toDataURL();
            undoDataStack.push(lastMove);
            console.log(undoDataStack.length);
            redoDataStack = [];
        }
    }
});