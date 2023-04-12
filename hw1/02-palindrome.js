const elem = document.querySelector('input');

function handleInput() {
  const inputNum = Number(elem.value);

  if (inputNum > 0) {
    // reverse the input
    let reverseInput = elem.value.split('');
    reverseInput.reverse();
    reverseInput = reverseInput.join('');
    // check if palindrome
    if (elem.value === reverseInput) {
      document.getElementById('result').className = 'text-success';
      document.getElementById('result').innerHTML = 'Yes. This is a palindrome!';
    } else {
      document.getElementById('result').className = 'text-danger';
      document.getElementById('result').innerHTML = 'No, Try again.';
    }
  } else {
    document.getElementById('result').className = 'text-danger';
    document.getElementById('result').innerHTML = 'Please enter a positive number.';
  }
}
elem.addEventListener('input', handleInput);
