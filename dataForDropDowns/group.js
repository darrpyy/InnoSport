var data = ['General', 'Special'];

var dropdown_attendance_group = document.getElementById('groupListAttendance');
var dropdown_FOVS_group = document.getElementById('groupListFOVS');


// Generate options
for (var i = 0; i < data.length; i++) {
    var option = document.createElement('li');
    option.textContent = data[i];
    option.classList.add("drop-down-item");
    dropdown_attendance_group.appendChild(option);
}

for (var i = 0; i < data.length; i++) {
    var option = document.createElement('li');
    option.textContent = data[i];
    option.classList.add("drop-down-item");
    dropdown_FOVS_group.appendChild(option);
}