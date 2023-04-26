const input = document.querySelector("input");
var originalText = document.getElementById('text').innerHTML; 

function handleKeyUp() {
  let inputStr = input.value.trim();  
  if (inputStr !== '') {
    let text = originalText;
    let regex = new RegExp(inputStr,"g");
    let newText = text.replace(regex, `<mark>${inputStr}</mark>`);
    document.getElementById('text').innerHTML = newText;
  }
}

input.addEventListener('keyup', handleKeyUp);
