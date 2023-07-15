var data = ['B22', 'B21', 'M22', 'M21'];

var dropdown_attendance_course = document.getElementById('courseListAttendance');
var dropdown_FOVS_course = document.getElementById('courseListFOVS');
var dropdown_sportHours_course = document.getElementById('courseListSportHours');
var dropdown_fittest_course = document.getElementById('courseListFittest');

// Generate options
for (var i = 0; i < data.length; i++) {
    var option = document.createElement('li');
    option.textContent = data[i];
    option.classList.add("drop-down-item");
    dropdown_attendance_course.appendChild(option);
}

for (var i = 0; i < data.length; i++) {
    var option = document.createElement('li');
    option.textContent = data[i];
    option.classList.add("drop-down-item");
    dropdown_FOVS_course.appendChild(option);
}

for (var i = 0; i < data.length; i++) {
    var option = document.createElement('li');
    option.textContent = data[i];
    option.classList.add("drop-down-item");
    dropdown_sportHours_course.appendChild(option);
}

for (var i = 0; i < data.length; i++) {
    var option = document.createElement('li');
    option.textContent = data[i];
    option.classList.add("drop-down-item");
    dropdown_fittest_course.appendChild(option);
}