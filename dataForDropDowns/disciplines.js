var data = ['discipline1', 'discipline2', 'discipline3'];

var dropdown_attendance_disciplines = document.getElementById('disciplinesListAttendance');
var dropdown_FOVS_disciplines = document.getElementById('disciplinesListFOVS');

// Generate options for attendance dropdown
for (var i = 0; i < data.length; i++) {
    var option = document.createElement('li');
    option.textContent = data[i];
    option.classList.add("drop-down-item");
    dropdown_attendance_disciplines.appendChild(option);
}

// Generate options for FOVS dropdown
for (var i = 0; i < data.length; i++) {
    var option = document.createElement('li');
    option.textContent = data[i];
    option.classList.add("drop-down-item");
    dropdown_FOVS_disciplines.appendChild(option);
}