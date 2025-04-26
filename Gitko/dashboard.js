const renderChart = (ctxId, label, dataSet) => {
  if (!dataSet || dataSet.error) {
    showError(ctxId, `⚠️ Could not load ${label}`);
    return;
  }

  const ctx = document.getElementById(ctxId).getContext('2d');
  const dark = document.body.classList.contains('bg-dark');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(dataSet),
      datasets: [{
        label,
        data: Object.values(dataSet),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        legend: { labels: { color: dark ? 'white' : 'black' } }
      },
      scales: {
        x: { ticks: { color: dark ? 'white' : 'black' } },
        y: { ticks: { color: dark ? 'white' : 'black' }, beginAtZero: true }
      }
    }
  });
};
