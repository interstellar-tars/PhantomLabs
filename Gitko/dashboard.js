fetch('https://gitko.cubiodojo.workers.dev/api/stats')
  .then(res => res.json())
  .then(data => {
    const ctx = document.getElementById('pageviewsChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(data.pageviews),
        datasets: [{
          label: 'Pageviews',
          data: Object.values(data.pageviews),
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: { y: { beginAtZero: true } }
      }
    });
  });
