
const ctx = document.getElementById('attendanceChart').getContext('2d');

function fetchAttendanceData(subject, start_date, end_date, time_unit) {
    return fetch('http://127.0.0.1:8000/attendance/' + subject + '?start_date=' + start_date + '&end_date=' + end_date +'&time_unit=' + time_unit)
        .then(response => response.json())
        .then(data => data);
}

// Prepare the data

var data = await fetchAttendanceData('Math', '2021-01-01', '2021-12-31', 'month');

// Convert date strings to actual Date objects
var parsedData = data.map(item => ({
    x: new Date(item.date),
    y: item.students
}));

async function getParsedData(subject, start_date, end_date, time_unit) {
    var data = await fetchAttendanceData(subject, start_date, end_date, time_unit);
    var parsedData = data.map(item => ({
        x: new Date(item.date),
        y: item.students
    }));
    return parsedData;
}


// Create a line chart
const attendance_chart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Number of Students',
            data: parsedData,
            borderColor: '#008141',
            backgroundColor: '#00814122',
            pointRadius: 4,
            pointBackgroundColor: '#008141',
            pointBorderColor: '#ffffff',
            pointHoverRadius: 6,
            pointHoverBackgroundColor: '#008141',
            pointHoverBorderColor: '#ffffff',
            lineTension: 0,
            borderWidth: 2
        }]
    },
    options: {
        scales: {
             x: {
              type: 'time',
                 time: {
                     unit: 'month'
                 },
                  ticks: {
                      source: 'data' // Force x-axis ticks to be based on data points
                  }
             },
            y: {
                type: 'linear',
                ticks: {
                    beginAtZero: true // Start y-axis from zero
                }
            }
        }
    }
});


export {attendance_chart, getParsedData};
export default attendance_chart;