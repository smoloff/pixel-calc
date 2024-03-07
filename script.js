const inputWidth = document.getElementById('input_width');
const inputHeight = document.getElementById('input_height');
const convert = document.getElementById('btn_convert');
const resultCnt = document.getElementById('result');
const selectSize = document.getElementById('standart_sizes');
const rotation = document.getElementById('rotate');
const dpiSelect = document.getElementById('dpi_values');
const measuring = document.querySelectorAll('.measuring');

let result = {};

// const convertFunc = () => {
//     result.widthPixel = Math.ceil(inputWidth.value / 2.54 * dpi/selectedUnit );
//     result.heightPixel = Math.ceil(inputHeight.value / 2.54 * dpi/selectedUnit );
//     resultCnt.innerHTML = `${result.widthPixel} x ${result.heightPixel} px`
// };

// measuring.forEach((elem)=> {
//     elem.addEventListener('change', () => {
//         selectedUnit  = elem.value
//         convertFunc()
//     })
// });



// selectSize.addEventListener('change', (e) => {
//     let w = selectSize.value.split('x');
//     inputWidth.value = Number(w[0]);
//     inputHeight.value = Number(w[1]);
//     convertFunc();
// });

// dpiSelect.addEventListener('change', (e) => {
//     let i = dpiSelect.selectedIndex
//     dpi = dpiSelect.value;
//     let description = dpiSelect[i].title  // описання для dpi
//     convertFunc();
// });

// convert.addEventListener('click', convertFunc);

// const convertFuncV2 = () => {

//     result.widthPixel = Math.ceil(inputWidth.value / 2.54 * dpi/selectedUnit );
//     result.heightPixel = Math.ceil(inputHeight.value / 2.54 * dpi/selectedUnit );
//     resultCnt.innerHTML = `${result.widthPixel} x ${result.heightPixel} px`;

// }


// rotate.addEventListener('click', (e) => {
//     let buffer = inputWidth.value;
//     inputWidth.value = inputHeight.value;
//     inputHeight.value = buffer;
//     convertFunc();
// });
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

inputWidth.addEventListener('input', () => {
    selectSize[0].selected = true;
    convertFunc();
});

inputHeight.addEventListener('input', () => {
    selectSize[0].selected = true;
    convertFunc();
});

const convertFunc = () => {
    FormObj.widthPx = Math.ceil(FormObj.width / 2.54 * FormObj.resolution / FormObj.units );
    FormObj.heightPx = Math.ceil(FormObj.height / 2.54 * FormObj.resolution / FormObj.units );
    resultCnt.innerHTML = `${FormObj.widthPx} x ${FormObj.heightPx} px`
};

form.addEventListener('change', (e) => {

    console.log(e.target?.id, e.target?.value)
    switch (e.target.id) {

        case 'standart_sizes':
            FormObj.width = Number(e.target.value.split('x')[0]);
            FormObj.height = Number(e.target.value.split('x')[1]);
            break;

        case 'dpi_values':
            FormObj.resolution = Number(e.target.value);
            break;

        case 'mm':
            selectSize[0].selected ? FormObj.units = units.MM : FormObj.units = FormObj.units;
            break;

        case 'cm':
            selectSize[0].selected ? FormObj.units = units.CM : FormObj.units = FormObj.units;
            selectSize[0].selected = true;
            console.log(FormObj)
            break;
    }
    
    convertFunc();
   
})




