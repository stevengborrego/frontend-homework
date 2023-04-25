const input = document.querySelector("input");


function handleKeyDown() {
  const inputStr = input.value;
  //console.log(inputStr);
}

function handleKeyUp() {
  const inputStr = input.value.trim();
  console.log(inputStr);

  //https://dev.to/kokaneka/highlight-searched-text-on-a-page-with-just-javascript-17b3#:~:text=The%20'mark'%20tag&text=If%20you%20surround%20any%20text,in%20this%20striking%20yellow%20color.&text=That%20makes%20highlighting%20searched%20text%20quite%20a%20simple%20task%20then.
}

input.addEventListener('keyup', handleKeyUp);
input.addEventListener('keydown', handleKeyDown);
