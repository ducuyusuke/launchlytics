import Chart from 'chart.js/auto'
import { getAquisitionsByYear } from './api'

(async function () {
  // The following is how we feed fictional data into our charts.
  // const data = [
  //   { year: 2010, count: 10 },
  //   { year: 2011, count: 20 },
  //   { year: 2012, count: 15 },
  //   { year: 2013, count: 25 },
  //   { year: 2014, count: 22 },
  //   { year: 2015, count: 30 },
  //   { year: 2016, count: 28 },
  // ];

  // The following is how we feed real API data into our charts.
  const data = await getAquisitionsByYear();

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'bar',
      // The following introduces optional parameters.
      options: {
        animation: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        }
      },
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();
