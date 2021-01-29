function populate_skills(data) {
    $("#character-skills").append("<thead><tr></tr></thead>")
    $("#character-skills").append("<tbody></thead>")

    $thead = $('#character-skills > thead > tr:first');
    $tbody = $('#character-skills > tbody > tr');
    $.each(data, function (key, entry) {
        console.log(entry.id);
        $thead.append($("<th></th>").text(entry.name));
        $tbody.each(function() {
            $(this).append($("<td>1</td>")); 
         });
    });

    $tbody.each(function() {
       $(this).append($("<td>1</td>")); 
    });
}

var skill_data;

function get_skills(cb) {
    $.getJSON("data/skills.json", function (data) {
        skill_data = data;
        cb(data);
    })
}

function skill_point_calculator() {
    
}

$(function () {
    get_skills(populate_skills);
});