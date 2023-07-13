const ctx = document.getElementById('frequencyChart');

//Prepare data
var subjects = ['Healthy Back', 'Functional', 'Crossfit', 'RAGE', 'Rage Knights', 'Street dance'];
var students = [40, 20, 35, 50, 30, 40];
var maxStudents = [80, 70, 80, 60, 80, 50];

//Create chart
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: subjects,
        datasets: [
            {
            label: 'Number of Students',
            data: students,
            borderWidth: 1,
            borderRadius: 20,
            backgroundColor: '#008141',
            barPercentage: 0.4,
            categoryPercentage: 0.8
        },
            {
                label: 'Maximum Number of Students',
                data: maxStudents,
                borderRadius: 20,
                backgroundColor: '#D8F5E8',
                borderWidth: 0,
                barPercentage: 0.4,
                categoryPercentage: 0.8
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