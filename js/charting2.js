function dynamicGeneration() {
  cost_cement = 75;
  cost_slag = 80;
  cost_fly_ash = 50;
  cost_aggregate = 25;
  cost_water = 10;
  cost_admixture = 1000;

  co2_cement = 1.04;
  co2_slag = 0.15;
  co2_water = 0.002;
  co2_aggregate = 0.02;
  co2_admixture = 4.65;
  co2_retarder = 2.7;
  co2_accelerator = 2.9;

  let mpa_input_value = document.getElementById("mpa").value;
  let cm_input_value = document.getElementById("cm").value;

  document.getElementById("table_of_mixtures").removeAttribute("hidden");

  /* 1 */ document.getElementById("co21").innerHTML = cm_input_value * 340;
  /* 2 */ document.getElementById("co22").innerHTML = cm_input_value * 260;
  /* 3 */ document.getElementById("co23").innerHTML = cm_input_value * 220;

  /* 1 */ document.getElementById("cost1").innerHTML = cm_input_value * 110;
  /* 2 */ document.getElementById("cost2").innerHTML = cm_input_value * 100;
  /* 3 */ document.getElementById("cost3").innerHTML = cm_input_value * 95;
}

var data = [
  {
    type: "scattermapbox",
    lat: ["47.344516", "47.491632", "47.393907"],
    lon: ["8.536073", "8.241590", "8.735835"],
    mode: "markers",
    marker: {
      size: 14,
    },
    text: [
      "Zürich - KIBAG Beton Wollishofen",
      "Gebenstorf - Lehner Kies und Betonwerk AG",
      "Fehraltorf - Ernst Schütz Kies + Beton AG",
    ],
  },
];

var layout = {
  autosize: true,
  hovermode: "closest",
  mapbox: {
    bearing: 0,
    center: {
      lat: 46.8,
      lon: 8,
    },
    pitch: 0,
    zoom: 6,
  },
};

Plotly.setPlotConfig({
  mapboxAccessToken:
    "pk.eyJ1Ijoic3RhY2tuZXZlcmZsb3ciLCJhIjoiY2w4NXl4bXNwMDIzYzN2cDZ4Y3R2cmJlbSJ9.22AqUFkgxFxPDUdwZmyHRg",
});

Plotly.newPlot("chart1", data, layout);

var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  mode: "lines",
  name: "Mixture 1",
};

var trace2 = {
  x: [2, 3, 4, 5],
  y: [16, 5, 11, 9],
  mode: "lines",
  name: "Mixture 2",
};

var trace3 = {
  x: [1, 2, 3, 4],
  y: [12, 9, 15, 12],
  mode: "lines",
  name: "Mixture 3",
};

var data = [trace1, trace2, trace3];

var layout = {
  title: "Mixtures strength (in MPa) vs. Time to reach strength (in days)",
};

Plotly.newPlot("chart2", data, layout);
