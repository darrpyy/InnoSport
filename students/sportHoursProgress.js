function fetchSportHours() {
    return fetch('https://sport.innopolis.university/api/')
        .then(response => response.json())
        .then(data => data);
}
var sportHours_array = await fetchSportHours();

//Create array with groups(id, name, description)
sportHours_array = sportHours_array["medical_groups"];

//Export disciplines
export default sportHours_array;

var dropdown_sport_hours = document.getElementById('sportHoursList');
var sport_hours_button = document.getElementById('sportHoursButton');
var drop_down_content_sport_hours = document.getElementById('dropDownContentSportHours');

// Generate options
for (var i = 0; i < sportHours_array.length; i++) {
    var option = document.createElement('li');
    option.textContent = sportHours_array[i].name;
    option.classList.add("drop-down-item");
    dropdown_sport_hours.appendChild(option);
    option.addEventListener('click', async function () {
        sport_hours_button.textContent = this.textContent;
        drop_down_content_sport_hours.classList.toggle('show');
});
}

// Show/hide dropdown content
sport_hours_button.addEventListener('click', function () {
    drop_down_content_sport_hours.classList.toggle('show');
});

// Close dropdown content when clicking outside
document.addEventListener('click', function (event) {
    if (!sport_hours_button.contains(event.target) && !drop_down_content_sport_hours.contains(event.target)) {
        drop_down_content_sport_hours.classList.remove('show');
    }
});