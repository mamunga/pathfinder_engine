function calculate_ability_modifier(ability) {
    modifier = Math.floor((parseFloat(ability.text()) - 10.0) / 2.0);
    ability.parent().children("td:last-child").text(modifier > 0 ? "+" + modifier : modifier);
}

function pay_with_ability_points(ability, offset) {
    if ((parseInt($('.remaining-ability-points').text()) - offset) < 0)
        return false;

    if ((parseInt(ability.text()) + offset) > 18)
        return false;

    if ((parseInt(ability.text()) + offset) < 5)
        return false;

    point_value = 1
    if (offset > 0) {
        if ((parseInt(ability.text()) + offset) >= 14)
            point_value++;
        
        if ((parseInt(ability.text()) + offset) >= 16)
            point_value++;

        if ((parseInt(ability.text()) + offset) >= 18)
            point_value++;
    } else {
        if ((parseInt(ability.text())) >= 14)
            point_value++;
        
        if ((parseInt(ability.text())) >= 16)
            point_value++;

        if ((parseInt(ability.text())) >= 18)
            point_value++;
    }
    
    $('.remaining-ability-points').text(parseInt($('.remaining-ability-points').text()) - (offset*point_value));
    return true;

}

function calculate_final_ability_value(ability) {
    ability_final = ability.parents().eq(2).children(".ability-final");
    ability_final.text(ability.text());
    calculate_ability_modifier(ability_final);
}

$(function () {
    $('.character-ability-table .number-container button:last-child').click(function () {
        ability = $(this).parent().children('div')
        if (pay_with_ability_points(ability, +1)) {
            ability.text(parseInt($(this).parent().children('div').text()) + 1);
            calculate_final_ability_value(ability);
        }
    })

    $('.character-ability-table .number-container button:first-child').click(function () {
        ability = $(this).parent().children('div')
        if (pay_with_ability_points(ability, -1)) {
            ability.text(parseInt($(this).parent().children('div').text()) - 1);
            calculate_final_ability_value(ability);
        }
    })
});