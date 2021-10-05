let pushBtn = document.getElementById("push-btn");
let popBtn = document.getElementById("pop-btn");
let myStack = document.getElementById("stack");
let counter = 0;

pushBtn.addEventListener("click", () => {
  let myValue = document.getElementById("input-tag").value;

  if (myValue.length != 0) {
    if (myStack.innerText == "Stack Empty") {
      myStack.innerText = myValue;
    } else if (counter == 0) {
      myStack.innerText = myValue;
    } else {
      myStack.innerText += "," + myValue;
    }
  }

  counter++;
  document.getElementById("input-tag").value = null;
});

popBtn.addEventListener("click", () => {
  let stack_my = document.getElementById("stack");

  let res = stack_my.innerText;
  let resSplit = res.split(",");

  resSplit.pop();

  if (resSplit.length != 0) {
    stack_my.innerText = resSplit.join(",");
  } else {
    stack_my.innerText = "Stack Empty";
  }
});
