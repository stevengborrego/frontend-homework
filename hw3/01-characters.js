const character = document.getElementsByClassName('character');

async function getCharacters() {
  const url = 'https://thronesapi.com/api/v2/Characters';
  try {
    let response = await fetch(url);
    return await response.json();
  }
  catch (erorr) {
    console.log(error);
  }
}

async function renderCharacters() {
  let characters = await getCharacters();
  let html = '';

  characters.forEach(character => {
    let htmlSegment = `<div class="character" onmouseover="this.style.background='gray';" onmouseout="this.style.background='none';">
                        <div style="margin:1em;">
                          <img src="${character.imageUrl}" >
                          <h3>${character.firstName} ${character.lastName}</h3>
                          <h4>${character.title}</h4>
                        </div>
                      </div>`;
                      
    html += htmlSegment;
  });

  let section = document.querySelector('section');
  section.innerHTML = html;
}

function changeBackground() {

}

renderCharacters();

character.addEventListener("mouseover", changeBackground)


