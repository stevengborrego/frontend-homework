import Chart from "chart.js/auto";

const donutChart = document.getElementById("donut-chart");

const backgroundColors = [
  "rgba(54, 162, 235, 0.8)",
  "rgba(255, 206, 86, 0.8)",
  "rgba(255, 99, 132, 0.8)",
  "rgba(75, 192, 192, 0.8)",
  "rgba(153, 102, 255, 0.8)",
  "rgba(255, 159, 64, 0.8)",
  "rgba(199, 199, 199, 0.8)",
  "rgba(83, 102, 255, 0.8)",
  "rgba(40, 159, 64, 0.8)",
  "rgba(210, 199, 199, 0.8)",
  "rgba(78, 52, 199, 0.8)",
];

const borderColors = [
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(255, 99, 132, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(159, 159, 159, 1)",
  "rgba(83, 102, 255, 1)",
  "rgba(40, 159, 64, 1)",
  "rgba(210, 199, 199, 1)",
  "rgba(78, 52, 199, 1)",
];

async function renderChart() {

  let houseCount = {
    Stark: 0,
    Arryn: 0,
    Baratheon: 0,
    Tully: 0,
    Greyjoy: 0,
    Lannister: 0,
    Tyrell: 0,
    Martell: 0,
    Targaryen: 0,
  };
  const characters = await getCharacters();
  console.log(characters);

  characters.forEach((character) => {
    if (character.family.includes("Stark")) houseCount.Stark += 1;
    else if (character.family.includes("Arryn")) houseCount.Arryn += 1;
    else if (character.family.includes("Baratheon")) houseCount.Baratheon += 1;
    else if (character.family.includes("Tully")) houseCount.Tully += 1;
    else if (character.family.includes("Greyjoy")) houseCount.Greyjoy += 1;
    else if (character.family.includes("Lannister")) houseCount.Lannister += 1;
    else if (character.family.includes("Tyrell")) houseCount.Tyrell += 1;
    else if (character.family.includes("Martell")) houseCount.Martell += 1;
    else if (
      character.family.includes("Targaryen") ||
      character.family.includes("Targaryn")
    )
      houseCount.Targaryen += 1;
  });

  new Chart(donutChart, {
    type: "doughnut",
    data: {
      labels: [
        "House Stark",
        "House Arryn",
        "House Baratheon",
        "House Tully",
        "House Greyjoy",
        "House Lannister",
        "House Tyrell",
        "House Martell",
        "House Targaryen",
      ],
      datasets: [
        {
          label: "Houses of GOT",
          data: [
            houseCount["Stark"],
            houseCount["Arryn"],
            houseCount["Baratheon"],
            houseCount["Tully"],
            houseCount["Greyjoy"],
            houseCount["Lannister"],
            houseCount["Tyrell"],
            houseCount["Martell"],
            houseCount["Targaryen"],
          ],
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
  });
}

async function getCharacters() {
  const url = "https://thronesapi.com/api/v2/Characters";
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

renderChart();

function Houses() {
  return (
    <div className="chart-container">
      <div className="chart">
        <h1>Exercise 02 - Charts</h1>
        <canvas
          id="donut-chart"
          className="donut-chart"
          aria-label="donut chart"
          role="img"
        ></canvas>
      </div>
    </div>
  );
}

export default Houses;
