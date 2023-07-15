//Prepare data
var data = ['All', 'General', 'Special', 'Preparative'];

var dropdown_group = document.getElementById('groupList');
var group_button = document.getElementById('groupButton');
var drop_down_content_group = document.getElementById('dropDownContentGroup');


// Generate options
for (var i = 0; i < data.length; i++) {
    var option = document.createElement('li');
    option.textContent = data[i];
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