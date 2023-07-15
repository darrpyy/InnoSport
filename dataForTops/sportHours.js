var data = [
    {name: "Egor Valikov", hours: 145},
    {name: "Egor Valikov", hours: 138},
    {name: "Egor Valikov", hours: 131},
    {name: "Egor Valikov", hours: 129},
    {name: "Egor Valikov", hours: 123},
    {name: "Egor Valikov", hours: 120},
    {name: "Egor Valikov", hours: 112},
    {name: "Egor Valikov", hours: 104},
    {name: "Egor Valikov", hours: 93},
    {name: "Egor Valikov", hours: 89}
];

var topSportHours = document.getElementById('top-hours');

data.sort(function (a, b) {
    return b.hours - a.hours
})

for (var i = 0; i < data.length; i++) {
    var line = document.createElement('div');
    line.classList.add("top-line")
    var student = data[i]

    var position = document.createElement("div");
    position.classList.add("position");
    position.textContent = (i + 1) + "";

    var name = document.createElement("div");
    name.classList.add("name");
    name.textContent = student.name;

    var hours = document.createElement("div");
    hours.classList.add("hours");
    hours.textContent = student.hours;

    line.appendChild(position);
    line.appendChild(name);
    line.appendChild(hours);

    topSportHours.appendChild(line);
}
