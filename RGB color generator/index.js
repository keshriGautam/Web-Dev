const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const alpha = document.getElementById('alphaindex');
const rgbaValue = document.getElementById('alpha');

red.addEventListener('click', ()=>{
    let redV = Math.round(red.value * 2.55);
    let greenV = Math.round(green.value * 2.55);
    let blueV = Math.round(blue.value * 2.55);
    let alfaV = alpha.value * 0.01;
    let rgbaColor = `rgba(${redV}, ${greenV}, ${blueV}, ${alfaV})`;
    document.body.style.backgroundColor = rgbaColor;
    rgbaValue.textContent = rgbaColor;
})

green.addEventListener('click', ()=>{
    let redV = Math.round(red.value * 2.55);
    let greenV = Math.round(green.value * 2.55);
    let blueV = Math.round(blue.value * 2.55);
    let alfaV = alpha.value * 0.01;
    let rgbaColor = `rgba(${redV}, ${greenV}, ${blueV}, ${alfaV})`;
    document.body.style.backgroundColor = rgbaColor;
    rgbaValue.textContent = rgbaColor;
})

blue.addEventListener('click', ()=>{
    let redV = Math.round(red.value * 2.55);
    let greenV = Math.round(green.value * 2.55);
    let blueV = Math.round(blue.value * 2.55);
    let alfaV = alpha.value * 0.01;
    let rgbaColor = `rgba(${redV}, ${greenV}, ${blueV}, ${alfaV})`;
    document.body.style.backgroundColor = rgbaColor;
    rgbaValue.textContent = rgbaColor;
})
alpha.addEventListener('click', ()=>{
    let redV = Math.round(red.value * 2.55);
    let greenV = Math.round(green.value * 2.55);
    let blueV = Math.round(blue.value * 2.55);
    let alfaV = alpha.value * 0.01;
    let rgbaColor = `rgba(${redV}, ${greenV}, ${blueV}, ${alfaV})`;
    document.body.style.backgroundColor = rgbaColor;
    rgbaValue.textContent = rgbaColor;
})

