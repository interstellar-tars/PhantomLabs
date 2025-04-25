fetch('https://gitko.cubiodojo.workers.dev/api/stats')
  .then(res => res.ok ? res.json() : Promise.reject('Bad response'))
  .then(data => {
    const renderChart = (ctxId, label, dataSet) => {
      if (!dataSet || dataSet.error) {
        showError(ctxId, `⚠️ Could not load ${label}`);
        return;
      }

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

    const showError = (canvasId, message) => {
      const canvas = document.getElementById(canvasId);
      const warning = document.createElement('div');
      warning.className = 'alert alert-warning mt-2';
      warning.textContent = message;
      canvas.insertAdjacentElement('afterend', warning);
    };

    renderChart('pageviewsChart', 'Pageviews', data.pageviews);
    renderChart('referrersChart', 'Top Referrers', data.referrer);
    renderChart('devicesChart', 'Device Types', data.devices);
  })
  .catch(err => {
    console.error('Gitko fetch error:', err);
    alert("⚠️ Unable to load analytics data at this time.");
  });
