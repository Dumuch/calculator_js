const firstNumber = document.querySelector('#firstNumber');
const secondNumber = document.querySelector('#secondNumber');

const multiplication = document.querySelector('#customCheckbox');

const customRadio1 = document.querySelector('#customRadio1');
const customRadio2 = document.querySelector('#customRadio2');
const customRadio3 = document.querySelector('#customRadio3');

const radioChecked = document.getElementsByName('customRadio');

const addition1 = document.querySelector('#customCheckbox1');
const addition2 = document.querySelector('#customCheckbox2');
const addition3 = document.querySelector('#customCheckbox3');

const сheckboxChecked = document.getElementsByName('customCheckbox1');

const result = document.querySelector('#result');


const inputFirstNumberValue = () => {
  const first = Number.parseInt(firstNumber.value);
  return first
};

const inputSecondNumberValue = () => {
  const second = Number.parseInt(secondNumber.value);
  return second
};



const multiplyNumberValue = () => {
  if (multiplication.checked === true) {
    for (let i = 0; i < radioChecked.length; i++) {
      if (radioChecked[i].checked === true) {
        const multiply = Number.parseInt(radioChecked[i].value);
        return multiply;
      }
    }
  } else {
    return 1
  }
};

const foldNumberValue = () => {
  let fold = 0;
  сheckboxChecked.forEach((item, i) => {
    if (item.checked === true) {
      fold = fold + Number.parseInt(сheckboxChecked[i].value);
    }
  });
  return fold;
};


const displayTotal = () => {
  if (secondNumber.value === `` || firstNumber.value === ``) {
    result.innerText = ``;
  } else {
    let total = inputFirstNumberValue() + inputSecondNumberValue();
    total = total * multiplyNumberValue();
    total = total + foldNumberValue();
    result.innerText = total;
  }
};


const activeRadio = () => {
  if (multiplication.checked === true) {
    displayTotal();
    customRadio1.disabled = false;
    customRadio2.disabled = false;
    customRadio3.disabled = false;
  } else {
    displayTotal();
    customRadio1.disabled = true;
    customRadio2.disabled = true;
    customRadio3.disabled = true;
  }
};


firstNumber.addEventListener('input', displayTotal);
secondNumber.addEventListener('input', displayTotal);
multiplication.addEventListener('input', activeRadio);

for (var i = 0; i < radioChecked.length; i++) {
  radioChecked[i].addEventListener('input', displayTotal);
};

for (var i = 0; i < сheckboxChecked.length; i++) {
  сheckboxChecked[i].addEventListener('input', displayTotal);
};
