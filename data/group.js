//Fetch data
function fetchGroups() {
    return fetch('https://sport.innopolis.university/api/medical_groups')
        .then(response => response.json())
        .then(data => data);
}
var groups_data = await fetchDisciplines();

//Create array with groups(id, name, description)
group_data = group_data["medical_groups"];
var group_array = group_data;

//Get HTML elements
var dropdown_group = document.getElementById('groupList');
var group_button = document.getElementById('groupButton');
var drop_down_content_group = document.getElementById('dropDownContentGroup');

// Generate options
for (var i = 0; i < group_array.length; i++) {
    var option = document.createElement('li');
    option.textContent = group_array[i].name;
    option.classList.add("drop-down-item");
    dropdown_group.appendChild(option);
    option.addEventListener('click', async function () {
        group_button.textContent = this.textContent;
        drop_down_content_group.classList.toggle('show');
});
}

// Show/hide dropdown content
group_button.addEventListener('click', function () {
    drop_down_content_group.classList.toggle('show');
});

// Close dropdown content when clicking outside
document.addEventListener('click', function (event) {
    if (!group_button.contains(event.target) && !drop_down_content_group.contains(event.target)) {
        drop_down_content_group.classList.remove('show');
    }
});