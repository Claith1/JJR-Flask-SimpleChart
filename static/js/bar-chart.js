var chartCanvas1 = document.getElementById('static-chart')
        var barData = {
            labels: ['Plum', 'Lime', 'Mangosteen', 'Kiwi', 'Pitaya', 'Mango'],
            datasets: [{
                label: 'Popularity',
                data: [16, 26, 3, 25, 16, 34],
                borderWidth: 1,
                backgroundColor: [
                    'rgba(125,89, 144, 0.4)',
                    'rgba(108, 145, 28, 0.4)',
                    'rgba(53, 48, 52, 0.4)',
                    'rgba(121, 84, 24, 0.4)',
                    'rgba(162, 32, 78, 0.4)',
                    'rgba(213, 136, 59, 0.4)',
                ],
                borderColor: [
                    'rgba(125,89, 144, 1)',
                    'rgba(108, 145, 28, 1)',
                    'rgba(53, 48, 52, 1)',
                    'rgba(121, 84, 24, 1)',
                    'rgba(162, 32, 78, 1)',
                    'rgba(213, 136, 59, 1)',
                ],
            }],
        }

        var barOptions = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    },
                }],
            },
        }

        var myChart1 = new Chart(chartCanvas1, {
            type: 'bar',
            data: barData,
            options: barOptions,
        })