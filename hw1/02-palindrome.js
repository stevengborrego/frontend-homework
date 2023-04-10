const elem = document.querySelector('input');

elem.addEventListener('input', handleInput);

function handleInput(event) {
    const inputNum = Number(elem.value);

    if (inputNum > 0) {
        // reverse the input
        reverseInput = elem.value.split("");
        reverseInput.reverse();
        reverseInput = reverseInput.join("");
        console.log(reverseInput);
        // check if palindrome
        if (elem.value === reverseInput) {
            console.log(true);
            document.getElementById("result").className = "text-success";
            document.getElementById("result").innerHTML = "Yes. This is a palindrome!";
        }
        else {
            console.log(false);
            document.getElementById("result").className = "text-danger";
            document.getElementById("result").innerHTML = "No, Try again.";
        }
    }
    
}