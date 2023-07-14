var data = ['Week', 'Month'];

var dropdown_attendance_period = document.getElementById('periodListAttendance');
var dropdown_FOVS_period = document.getElementById('periodListFOVS');


// Generate options
for (var i = 0; i < data.length; i++) {
    var option = document.createElement('li');
    option.textContent = data[i];
    option.classList.add("drop-down-item");
    dropdown_attendance_period.appendChild(option);
}

for (var i = 0; i < data.length; i++) {
    var option = document.createElement('li');
    option.textContent = data[i];
    option.classList.add("drop-down-item");
    dropdown_FOVS_period.appendChild(option);
}