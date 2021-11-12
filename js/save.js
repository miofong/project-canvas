$("#save").click(() => {
    // var download = function() {
        var link = document.createElement("a");
        let name = prompt("Save file as: ")
        link.download = `${name}.png`;
        link.href = document.getElementById("canvas-real").toDataURL()
        link.click();
    // }      
})