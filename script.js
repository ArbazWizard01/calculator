const calculation = (e) => {
    // e.stopPropagation();
    const operator = document.getElementById("operators");
    console.log(operator.value);
    const first = document.getElementById("first");
    const second = document.getElementById("second");
    const addValue = document.getElementById("resultValue");
    let one = parseFloat(first.value);
    let two = parseFloat(second.value);
  
    if (operator.value === "addition") {
      let add = one + two;
      addValue.innerHTML = ":   " + add;
    }
    if (operator.value === "substraction") {
      let substract = one - two;
      addValue.innerHTML = ":   " + substract;
    }
    if (operator.value === "division") {
      let divide = one / two;
      addValue.innerHTML = ":   " + divide;
    }
    if (operator.value === "multiplication"){
      let multiply = one * two;
      addValue.innerHTML = ":   " + multiply;
    }
    if (operator.value === "module"){
      let remainder = one % two;
      addValue.innerHTML = ":   " + remainder;
    }
  };
  
  const clickButton = document.querySelector("#resultButton");
  clickButton.onclick = calculation;
  
  // const container = document.querySelector('#pageContainer');
  // container.onclick = () => {
  //     alert('hello world');
  // }
  