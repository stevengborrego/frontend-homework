
function Search() {
  return (
    <div>
      <h1>Search</h1>
      <input id="search"></input>
    </div>
  )
}

function getInput() {
  let text = input.value.trim();
  console.log(text);
}

const input = document.getElementById("search");

input.addEventListener("keyup", getInput);

export default Search
