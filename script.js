(async function () {
  const data = [
    { day: 1, tasks: 3 },
    { day: 2, tasks: 7 },
    { day: 3, tasks: 1 },
    { day: 4, tasks: 8 },
    { day: 5, tasks: 4 },
    { day: 6, tasks: 10 },
    { day: 7, tasks: 2 },
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
