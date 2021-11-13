$(() => {
  let buttons = [`rectangle`, `circle`, `polygon`, `pen`, `eraser`, `line`, `curve`, `text`, `undo`, `redo`, `clear`, `download`];
  let mw = window.innerWidth;
  let mh = window.innerHeight;
  canvasReal.width = mw;
  canvasReal.height = mh * 0.83;
  canvasDraft.width = mw;
  canvasDraft.height = mh * 0.83;
  let fontRangeBar = document.getElementById("font-range");
  let fontSizeNumber = document.getElementById("font-size-number");
  fontSizeNumber.innerHTML = fontRangeBar.value;
  localStorage.size = 12;
  fontRangeBar.oninput = function () {
    fontSizeNumber.innerHTML = this.value;
    localStorage.size = this.value;
  };
  localStorage.font = "Arial";
  $('#font-picker-selector').change(() => {
    localStorage.font = $('#font-picker-selector option:selected').text();
  })
  currentFunction = new DrawingLine(contextReal)
  $("#rectangle").click(() => {
    if (localStorage.pressed !== `rectangle`) {
      localStorage.pressed = `rectangle`;
    };
    for (i = 0; i < buttons.length; i++) {
      if (localStorage.pressed !== buttons[i]) {
        $(`#${buttons[i]}`).css("opacity", "0.5");
        $(`#${buttons[i]}`).css("box-shadow", "0 0 8px 0 rgba(255, 255, 255, 0.5)");
      } else {
        $(`#${localStorage.pressed}`).css("opacity", "1");
        $(`#${localStorage.pressed}`).css("box-shadow", "0 0 8px 0 rgba(255, 255, 255, 1)");
        $("#textBox").remove();
        contextReal.globalCompositeOperation = "source-over"
        currentFunction = new DrawingRectangle(contextReal, contextDraft);
      }
    }
  });
  $("#pen").click(() => {
    if (localStorage.pressed !== `pen`) {
      localStorage.pressed = `pen`;
    };
    for (i = 0; i < buttons.length; i++) {
      if (localStorage.pressed !== buttons[i]) {
        $(`#${buttons[i]}`).css("opacity", "0.5");
        $(`#${buttons[i]}`).css("box-shadow", "0 0 8px 0 rgba(255, 255, 255, 0.5)");
      } else {
        $(`#${localStorage.pressed}`).css("opacity", "1");
        $(`#${localStorage.pressed}`).css("box-shadow", "0 0 8px 0 rgba(255, 255, 255, 1)");
        contextReal.globalCompositeOperation = "source-over"
        $("#textBox").remove();
        currentFunction = new DrawingLine(contextReal);
      }
    }
  });
  $("#circle").click(() => {
    if (localStorage.pressed !== `circle`) {
      localStorage.pressed = `circle`;
    };
    for (i = 0; i < buttons.length; i++) {
      if (localStorage.pressed !== buttons[i]) {
        $(`#${buttons[i]}`).css("opacity", "0.5");
        $(`#${buttons[i]}`).css("box-shadow", "0 0 8px 0 rgba(255, 255, 255, 0.5)");
      } else {
        $(`#${localStorage.pressed}`).css("opacity", "1");
        $(`#${localStorage.pressed}`).css("box-shadow", "0 0 8px 0 rgba(255, 255, 255, 1)");
        contextReal.globalCompositeOperation = "source-over"
        $("#textBox").remove();
        currentFunction = new DrawingCircle(contextReal, contextDraft)
      }
    }
  });
  $("#line").click(() => {
    if (localStorage.pressed !== `line`) {
      localStorage.pressed = `line`;
    };
    for (i = 0; i < buttons.length; i++) {
      if (localStorage.pressed !== buttons[i]) {
        $(`#${buttons[i]}`).css("opacity", "0.5");
        $(`#${buttons[i]}`).css("box-shadow", "0 0 8px 0 rgba(255, 255, 255, 0.5)");
      } else {
        $(`#${localStorage.pressed}`).css("opacity", "1");
        $(`#${localStorage.pressed}`).css("box-shadow", "0 0 8px 0 rgba(255, 255, 255, 1)");
        contextReal.globalCompositeOperation = "source-over"
        $("#textBox").remove();
        currentFunction = new Line(contextReal, contextDraft)
      }
    }
  });
  $("#curve").click(() => {
    if (localStorage.pressed !== `curve`) {
      localStorage.pressed = `curve`;
    };
    for (i = 0; i < buttons.length; i++) {
      if (localStorage.pressed !== buttons[i]) {
        $(`#${buttons[i]}`).css("opacity", "0.5");
        $(`#${buttons[i]}`).css("box-shadow", "0 0 8px 0 rgba(255, 255, 255, 0.5)");
      } else {
        $(`#${localStorage.pressed}`).css("opacity", "1");
        $(`#${localStorage.pressed}`).css("box-shadow", "0 0 8px 0 rgba(255, 255, 255, 1)");
        contextReal.globalCompositeOperation = "source-over"
        $("#textBox").remove();
        currentFunction = new Curve(contextReal, contextDraft)
      }
    }
  });
  $("#polygon").click(() => {
    if (localStorage.pressed !== `polygon`) {
      localStorage.pressed = `polygon`;
    };
    for (i = 0; i < buttons.length; i++) {
      if (localStorage.pressed !== buttons[i]) {
        $(`#${buttons[i]}`).css("opacity", "0.5");
        $(`#${buttons[i]}`).css("box-shadow", "0 0 8px 0 rgba(255, 255, 255, 0.5)");
      } else {
        $(`#${localStorage.pressed}`).css("opacity", "1");
        $(`#${localStorage.pressed}`).css("box-shadow", "0 0 8px 0 rgba(255, 255, 255, 1)");
        contextReal.globalCompositeOperation = "source-over"
        $("#textBox").remove();
        currentFunction = new Polygon(contextReal, contextDraft)
      }
    }
  });
  $("#text").click(() => {
    if (localStorage.pressed !== `text`) {
      localStorage.pressed = `text`;
    };
    for (i = 0; i < buttons.length; i++) {
      if (localStorage.pressed !== buttons[i]) {
        $(`#${buttons[i]}`).css("opacity", "0.5");
        $(`#${buttons[i]}`).css("box-shadow", "0 0 8px 0 rgba(255, 255, 255, 0.5)");
      } else {
        $(`#${localStorage.pressed}`).css("opacity", "1");
        $(`#${localStorage.pressed}`).css("box-shadow", "0 0 8px 0 rgba(255, 255, 255, 1)");
        contextReal.globalCompositeOperation = "source-over"
        currentFunction = new Text(contextReal, contextDraft)
      }
    }
  });
  $("#eraser").click(() => {
    if (localStorage.pressed !== `eraser`) {
      localStorage.pressed = `eraser`;
    };
    for (i = 0; i < buttons.length; i++) {
      if (localStorage.pressed !== buttons[i]) {
        $(`#${buttons[i]}`).css("opacity", "0.5");
        $(`#${buttons[i]}`).css("box-shadow", "0 0 8px 0 rgba(255, 255, 255, 0.5)");
      } else {
        $(`#${localStorage.pressed}`).css("opacity", "1");
        $(`#${localStorage.pressed}`).css("box-shadow", "0 0 8px 0 rgba(255, 255, 255, 1)");
        $("#textBox").remove();
        currentFunction = new Erasing(contextReal, contextDraft)
      }
    }
  });
  $("#bucket").click(() => {
    if (localStorage.pressed !== `bucket`) {
      localStorage.pressed = `bucket`;
    };
    for (i = 0; i < buttons.length; i++) {
      if (localStorage.pressed !== buttons[i]) {
        $(`#${buttons[i]}`).css("opacity", "0.5");
        $(`#${buttons[i]}`).css("box-shadow", "0 0 8px 0 rgba(255, 255, 255, 0.5)");
      } else {
        $(`#${localStorage.pressed}`).css("opacity", "1");
        $(`#${localStorage.pressed}`).css("box-shadow", "0 0 8px 0 rgba(255, 255, 255, 1)");
        contextReal.globalCompositeOperation = "source-over"
        $("#textBox").remove();
        currentFunction = new Bucket(contextReal, contextDraft)
      }
    }
  });
});