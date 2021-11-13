let downloadCheck = [`rectangle`, `circle`, `polygon`, `pen`, `eraser`, `line`, `curve`, `text`, `undo`, `redo`, `clear`, `download`];
$("#download").click(() => {
    if (localStorage.pressed !== `download`) {
        localStorage.pressed = `download`;
    };
    for (i = 0; i < downloadCheck.length; i++) {
        if (localStorage.pressed !== downloadCheck[i]) {
            $(`#${downloadCheck[i]}`).css("opacity", "0.5");
            $(`#${downloadCheck[i]}`).css("box-shadow", "0 0 8px 0 rgba(255, 255, 255, 0.5)");
            $("#textBox").remove();
        } else {
            $(`#${localStorage.pressed}`).css("opacity", "1");
            $(`#${localStorage.pressed}`).css("box-shadow", "0 0 8px 0 rgba(255, 255, 255, 1)");
            let link = document.createElement("a");
            let name = prompt("Save file as: ")
            if (name !== null) {
                link.download = `${name}.png`;
                link.href = document.getElementById("canvas-real").toDataURL()
                link.click();
            }
        }
    }
});