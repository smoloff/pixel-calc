const inputWidth = document.getElementById('input_width');
const inputHeight = document.getElementById('input_height');
const convert = document.getElementById('btn_convert');
const resultCnt = document.getElementById('result');
const selectSize = document.getElementById('standart_sizes');
const rotation = document.getElementById('rotate');
const dpiSelect = document.getElementById('dpi_values');
let dpi = 300;
let result = {};

const convertFunc = () => {
    result.widthPixel = Math.ceil(inputWidth.value / 2.54 * dpi);
    result.heightPixel = Math.ceil(inputHeight.value / 2.54 * dpi);
    resultCnt.innerHTML = `${result.widthPixel} x ${result.heightPixel} px`
}
// мделать слушатель которій при клике ппеерключает html елемент select на "Власний розмір"
// inputWidth.addEventListener('input', ()=> {

// });

selectSize.addEventListener('change', (e) => {
    let w = selectSize.value.split('x');
    inputWidth.value = Number(w[0]) / 10; //перевод мм в см
    inputHeight.value = Number(w[1]) / 10; //перевод мм в см
    convertFunc();
});

dpiSelect.addEventListener('change', (e) => {
    let i = dpiSelect.selectedIndex
    dpi = dpiSelect.value;
    let description = dpiSelect[i].title  // описання для dpi
    convertFunc();
});




convert.addEventListener('click', convertFunc)
rotate.addEventListener('click', (e) => {
    let buffer = inputWidth.value;
    inputWidth.value = inputHeight.value;
    inputHeight.value = buffer;
    convertFunc();
});



