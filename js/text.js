let inputCounter = false;
class Text extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super()
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
    onMouseDown(coord) {
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onMouseUp(coord, event) {
        if (inputCounter !== false) {
            inputCounter = false;
            $("#textBox").remove();
        } else {
            $("#textBox").remove();
            this.origX = coord[0];
            this.origY = coord[1];
            let input = document.createElement("input");
            input.type = "text";
            input.id = "textBox";
            input.placeholder = "To add text, click here, type, and push 'Enter'!";
            input.style.position = "absolute";
            input.style.width = "600px";
            input.style.color = "black";
            input.style.font = `${localStorage.size}px ${localStorage.font}`;
            input.style.padding = "20px";
            input.style.left = (this.origX - 20) + "px";
            input.style.top = (this.origY + 182) + "px";
            document.body.appendChild(input);
            input.onkeydown = function handleEnter(input) {
                this.origX = input.offsetX;
                this.origY = input.offsetX;
                let canvasReal = document.getElementById("canvas-real");
                let contextReal = canvasReal.getContext("2d");
                if (input.key == 'Enter') {
                    contextReal.fillStyle = localStorage.color;
                    contextReal.font = `${localStorage.size}px ${localStorage.font}`;
                    contextReal.textBaseline = "top";
                    contextReal.fillText($("#textBox").val(), event.clientX - 5, event.clientY - 217, 60);
                    $("#textBox").remove();
                    inputCounter = false;
                } else if (input.key == 'Escape') {
                    $("#textBox").remove();
                    inputCounter = false;
                }
            }
        }
        let lastMove = canvasReal.toDataURL();
        undoDataStack.push(lastMove);
        redoDataStack = []
    }
}

