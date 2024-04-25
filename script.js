const inputWidth = document.getElementById('input_width');
const inputHeight = document.getElementById('input_height');
const convert = document.getElementById('btn_convert');
const resultCnt = document.getElementById('result');
const selectSize = document.getElementById('standart_sizes');
const rotation = document.getElementById('rotate');
const dpiSelect = document.getElementById('dpi_values');
const measuring = document.querySelectorAll('.measuring');

let result = {};


const units = {
    CM: 1,
    MM: 10
}

const FormObj = {
    width: 148,
    height: 210,
    resolution: 300,
    units: units.MM,
    widthPx: 1000,
    heightPx: 1000
}

const form = document.getElementById('someId');



const convertFunc = () => {
    FormObj.widthPx = Math.ceil(FormObj.width / 2.54 * FormObj.resolution / FormObj.units);
    FormObj.heightPx = Math.ceil(FormObj.height / 2.54 * FormObj.resolution / FormObj.units);
    resultCnt.innerHTML = `${FormObj.widthPx} x ${FormObj.heightPx} px`
};

convertFunc(); //первibq первинний прорахунок

form.addEventListener('change', (e) => {

    console.log(e.target?.id, e.target?.value)
    switch (e.target.id) {

        case 'standart_sizes':
            FormObj.width = Number(e.target.value.split('x')[0]);
            FormObj.height = Number(e.target.value.split('x')[1]);
            inputWidth.value = e.target.value.split('x')[0];
            inputHeight.value = e.target.value.split('x')[1];
            break;

        case 'dpi_values':
            FormObj.resolution = Number(e.target.value);
            break;

        case 'mm':
            FormObj.units == units.MM ? FormObj.units = FormObj.units : FormObj.units = units.MM;

            selectSize[0].selected = true;
            e.target.checked = true;
            console.log(FormObj)
            break;

        case 'cm':
            FormObj.units == units.CM ? FormObj.units = FormObj.units : FormObj.units = units.CM;
            selectSize[0].selected = true;
            e.target.checked = true;
            console.log(FormObj)
            break;

        case 'input_width':
            FormObj.width = Number(e.target.value);
            selectSize[0].selected = true;
            break;

        case 'input_height':
            FormObj.height = Number(e.target.value);
            selectSize[0].selected = true;
            break;
    }

    convertFunc();

})




