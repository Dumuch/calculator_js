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

const сheckboxChecked = document.getElementsByName('customCheckbox');

const result = document.querySelector('#result');

let total = 0;

const fold = (first=0, second=0, multiply=1) => {
    total = (first + second) * multiply;
    result.innerText = total;
}

const inputNumberValueHandler = () => {
  const first = Number.parseInt(firstNumber.value);
  const second = Number.parseInt(secondNumber.value);
  fold(first, second);
};


const defineRadioChecked = () => {
  for (let i = 0; i < radioChecked.length; i++) {
    if (radioChecked[i].checked == true) {
      fold(radioChecked[i].value);
    }
  }
}

const activeRadio = () => {
  if (multiplication.checked === true) {
    defineRadioChecked();
    customRadio1.disabled = false;
    customRadio2.disabled = false;
    customRadio3.disabled = false;
  } else {
    fold();
    customRadio1.disabled = true;
    customRadio2.disabled = true;
    customRadio3.disabled = true;
  }
}

firstNumber.addEventListener('input', inputNumberValueHandler);
secondNumber.addEventListener('input', inputNumberValueHandler);

for (let i = 0; i < radioChecked.length; i++) {
  radioChecked[i].addEventListener('click', defineRadioChecked);
};

activeRadio();

multiplication.addEventListener('click', activeRadio);

for (let i = 0; i < сheckboxChecked.length; i++) {
  сheckboxChecked[i].addEventListener('click', () =>{});
};
