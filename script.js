(async function () {
  const data = [
    { day: "1st day", tasks: 3 },
    { day: "2nd day", tasks: 7 },
    { day: "3rd day", tasks: 1 },
    { day: "4th day", tasks: 8 },
    { day: "5th day", tasks: 4 },
    { day: "6th day", tasks: 10 },
    { day: "7th day", tasks: 2 },
  ];

  new Chart(document.getElementById("task-completion-chart"), {
    type: "line",
    data: {
      labels: data.map((row) => row.day),
      datasets: [
        {
          label: "Tasks completed",
          data: data.map((row) => row.tasks),
        },
      ],
    },
    options: {
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      elements: {
        line: {
          borderColor: "#ff5964",
        },
      },
    },
  });
})();

window.addEventListener("resize", () => {
  for (let id in Chart.instances) {
    Chart.instances[id].resize();
  }
});
