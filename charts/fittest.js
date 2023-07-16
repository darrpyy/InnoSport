const ctx = document.getElementById('fittestChart');

//Prepare data
var semesters = ['F22', 'S23', 'Summer 23'];
var crunches = [40, 20, 35];
var push_ups = [80, 70, 80];
var tilt = [60, 50, 20];

//Create chart
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: semesters,
        datasets: [
            {
                label: 'Crunches',
                data: crunches,
                borderWidth: 1,
                borderRadius: 20,
                backgroundColor: '#008141',
                barPercentage: 1,
                categoryPercentage: 0.5
            },
            {
                label: 'Push-ups',
                data: push_ups,
                borderRadius: 20,
                backgroundColor: '#D8F5E8',
                borderWidth: 0,
                barPercentage: 1,
                categoryPercentage: 0.5
            },
            {
                label: 'Tilt',
                data: tilt,
                borderRadius: 20,
                backgroundColor: '#b5f3d7',
                borderWidth: 0,
                barPercentage: 1,
                categoryPercentage: 0.5
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});