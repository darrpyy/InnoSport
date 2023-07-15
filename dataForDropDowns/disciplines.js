var data = ['All','General Physical Training', 'discipline2', 'discipline3', 'discipline4',
    'discipline5', 'discipline6'];

var dropdown_disciplines = document.getElementById('disciplinesList');
var disciplines_button = document.getElementById('disciplinesButton');
var drop_down_content_disciplines = document.getElementById('dropDownContentDisciplines');

// Generate options for attendance dropdown
for (var i = 0; i < data.length; i++) {
    var option = document.createElement('li');
    option.textContent = data[i];
    option.classList.add("drop-down-item");
    dropdown_disciplines.appendChild(option);
    option.addEventListener('click', async function () {
        disciplines_button.textContent = this.textContent;
        drop_down_content_disciplines.classList.toggle('show');
    });
}

// Show/hide dropdown content
disciplines_button.addEventListener('click', function () {
    drop_down_content_disciplines.classList.toggle('show');
});

// Close dropdown content when clicking outside
document.addEventListener('click', function (event) {
    if (!disciplines_button.contains(event.target) &&
        !drop_down_content_disciplines.contains(event.target)) {
        drop_down_content_disciplines.classList.remove('show');
    }
});