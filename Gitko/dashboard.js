fetch('https://gitko.cubiodojo.workers.dev/api/stats')
  .then(res => res.json())
  .then(data => {
    const renderChart = (ctxId, label, dataSet) => {
      const ctx = document.getElementById(ctxId).getContext('2d');
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
          scales: { y: { beginAtZero: true } }
        }
      });
    };

    renderChart('pageviewsChart', 'Pageviews', data.pageviews);
    renderChart('referrersChart', 'Top Referrers', data.referrers);
    renderChart('devicesChart', 'Device Types', data.devices);
  });
