$("#clear").click(() => {
  contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
  var lastMove = canvasReal.toDataURL();
  undoDataStack.push(lastMove);
  console.log(undoDataStack.length);
  redoDataStack = [];
});
