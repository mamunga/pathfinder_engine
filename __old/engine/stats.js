function calculate_ability_modifiers() {
    $("#abilities > tbody").children("tr").slice(1, 7).each(function () {
        modifier = Math.floor((parseFloat($(this).children("td")[2].innerHTML) - 10.0) / 2.0);
        $(this).children("td")[3].innerHTML = modifier;
    });
}


function modifyStat(ability, offset) {
    current_ability_value = parseInt($("#" + ability + "-base")[0].innerHTML);
    current_ability_points = parseInt($("#abilities > tbody").children("tr").last().children("td")[1].innerHTML);
    point_offset = 1;
    if ((current_ability_value == 8 && offset < 0) || (current_ability_value == 18 && offset > 0))
        return;

    if (offset > 0) {
        if ((current_ability_value + offset) >= 14) {
            point_offset++;
            if ((current_ability_value + offset) >= 16) {
                point_offset++;
                if ((current_ability_value + offset) >= 18)
                    point_offset++;
            }
        }
    }
    else {
        if ((current_ability_value) >= 14) {
            point_offset++;
            if ((current_ability_value) >= 16) {
                point_offset++;
                if ((current_ability_value) >= 18)
                    point_offset++;
            }
        }
        point_offset = point_offset * -1;
    }


    if ((current_ability_points - point_offset) < 0)
        return;


    $("#" + ability + "-base")[0].innerHTML = parseInt($("#" + ability + "-base")[0].innerHTML) + offset;
    $("#abilities > tbody").children("tr").last().children("td")[1].innerHTML = parseInt($("#abilities > tbody").children("tr").last().children("td")[1].innerHTML) - point_offset;
    calculate_ability_modifiers();
}

$(function () { calculate_ability_modifiers() });