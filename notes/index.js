document.addEventListener('DOMContentLoaded', ()=> {
    const clearAll = document.getElementById('clear');
    const lowerCase = document.getElementById('lower');
    const upperCase = document.getElementById('upper');
    const bold = document.getElementById('bold');
    const itallic =document.getElementById('italic');
    const textInput = document.getElementById('text');
    const output = document.querySelector('.output');


    
       textInput.addEventListener('input', ()=>{
        output.textContent = textInput.value;
       })
       
      clearAll.addEventListener('click', ()=>{
        output.textContent = '';
        textInput.value = '';
      }) 

      lowerCase.addEventListener('click', ()=>{
        output.textContent = output.textContent.toLowerCase();
      })

      upperCase.addEventListener('click', ()=>{
        output.textContent = output.textContent.toUpperCase();
      })

      bold.addEventListener('click', ()=>{
        output.innerHTML = `<b>${output.innerHTML}</b>`;
      })

      itallic.addEventListener('click', ()=>{
        output.innerHTML = `<i>${output.innerHTML}</i>`;
      })
    
})