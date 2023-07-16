const ctx = document.getElementById('fittestChart');

//Prepare data
var semesters = ['F22', 'S23', 'Summer 23'];
var score = [40, 20, 35, 50, 30, 40, 40, 30, 10, 60, 40];
var maxScore = [80, 70, 80, 60, 80, 50, 70, 60, 30, 80, 60];

//Create chart
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: semesters,
        datasets: [
            {
            label: 'Score',
            data: score,
            borderWidth: 1,
            borderRadius: 20,
            backgroundColor: '#008141',
            barPercentage: 1,
            categoryPercentage: 0.5
        },
            {
                label: 'Maximum Score',
                data: maxScore,
                borderRadius: 20,
                backgroundColor: '#D8F5E8',
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