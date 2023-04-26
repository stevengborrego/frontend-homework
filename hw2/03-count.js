const input = document.querySelector("input");
var originalText = document.getElementById("text").innerHTML;

// Used this as a resource: https://dev.to/kokaneka/highlight-searched-text-on-a-page-with-just-javascript-17b3#:~:text=The%20'mark'%20tag&text=If%20you%20surround%20any%20text,in%20this%20striking%20yellow%20color.&text=That%20makes%20highlighting%20searched%20text%20quite%20a%20simple%20task%20then.
function handleKeyUp() {
  let inputStr = input.value.trim();
  if (inputStr !== "") {
    let text = originalText;
    let regex = new RegExp(inputStr, "g");
    let newText = text.replace(regex, `<mark>${inputStr}</mark>`);
    document.getElementById("text").innerHTML = newText;
  }
}

input.addEventListener("keyup", handleKeyUp);
