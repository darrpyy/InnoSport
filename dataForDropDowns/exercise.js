var data = ['exercise 1', 'exercise 2', 'exercise 3', 'exercise 4'];

var dropdown_fittest_exercise = document.getElementById('exerciseListFittest');

// Generate options for attendance dropdown
for (var i = 0; i < data.length; i++) {
    var option = document.createElement('li');
    option.textContent = data[i];
    option.classList.add("drop-down-item");
    dropdown_fittest_exercise.appendChild(option);
}