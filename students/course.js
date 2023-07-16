function fetchCourses() {
    return fetch('https://sport.innopolis.university/api/')
        .then(response => response.json())
        .then(data => data);
}
var course_array = await fetchCourses();

//Create array with groups(id, name, description)
course_array = course_array["sport_hours"];

//Export disciplines
export default course_array;

var dropdown_courses = document.getElementById('coursesList');
var courses_button = document.getElementById('courseButton');
var drop_down_content_courses = document.getElementById('dropDownContentCourses');

// Generate options
for (var i = 0; i < course_array.length; i++) {
    var option = document.createElement('li');
    option.textContent = course_array[i].name;
    option.classList.add("drop-down-item");
    dropdown_courses.appendChild(option);
    option.addEventListener('click', async function () {
        courses_button.textContent = this.textContent;
        drop_down_content_courses.classList.toggle('show');
});
}

// Show/hide dropdown content
courses_button.addEventListener('click', function () {
    drop_down_content_courses.classList.toggle('show');
});

// Close dropdown content when clicking outside
document.addEventListener('click', function (event) {
    if (!courses_button.contains(event.target) && !drop_down_content_courses.contains(event.target)) {
        drop_down_content_courses.classList.remove('show');
    }
});