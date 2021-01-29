function classes(data, cb) {
    let class_dropdown = $(".class-select");
    class_dropdown.empty();

    //class_dropdown.append('<option selected="true" disabled>Choose Class</option>');

    const class_url = 'data/classes.json';
    // Populate class_dropdown with list of classes
        $.each(data, function (key, entry) {
            class_dropdown.each(function () {
                $(this).append($('<option></option>').attr('value', entry.id).text(entry.name));
                $(this).prop('selectedIndex', 0);
            })
        })
        cb(data, updatebab);
}

function bab(data, cb) {
    $(".character-level").each(function () {
        lvl = $(this).attr("lvl");
        character_class_select = $(this).children("select#character-class-lvl" + lvl + ".class-select")[0];
        character_class_id = character_class_select.options[character_class_select.options.selectedIndex].val;
        let bab;
        obj = $(this).children(".bab");
            bab = data.find(({ characterclass }) => characterclass == character_class_id).bab;
            cb(obj, lvl, bab);   
    })

}

function get_classes(cb) {
    $.getJSON("data/classes.json", function (data) {
        cb(data, bab);
    })
}

function updatebab(obj, lvl, bab) {
    $(obj).text(Math.floor(parseFloat(lvl, 10) * bab));
}

$(function () {
    get_classes(classes);
});
