$("#undo").click(function undo() {
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
});

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
      nextStep.src = redoDataStack[redoDataStack.length - 1];
      nextStep.onload = function () {
        contextReal.drawImage(nextStep, 0, 0);
      };
      undoDataStack.push(redoDataStack.pop());
    }
  }
});
