var data = ['discipline1', 'discipline2', 'discipline3'];

var dropdown = document.getElementById('disciplinesList');

// Generate options
for (var i = 0; i < data.length; i++) {
    var option = document.createElement('li');
    option.textContent = data[i];
    option.className("drop-down-item");
    dropdown.appendChild(option);
}