// https://www.omnicalculator.com/conversion/ppm

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const numberRadio = document.getElementById('numberRadio');
const PPTRadio = document.getElementById('PPTRadio');

let number;
let PPT = v; 

// labels of the inpust
const variable = document.getElementById('variable');

numberRadio.addEventListener('click', function() {
  variable.textContent = 'PPT';
  PPT = v;
  result.textContent = '';
});

PPTRadio.addEventListener('click', function() {
  variable.textContent = 'Number';
  number = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(numberRadio.checked)
    result.textContent = `Number = ${computenumber().toFixed(5)}`;

  else if(PPTRadio.checked)
    result.textContent = `PPT = ${computePPT().toFixed(5)}`;
})

// calculation

function computenumber() {
  return Number(PPT.value) * 1000000000000;
}

function computePPT() {
  return Number(number.value) / 1000000000000;
}