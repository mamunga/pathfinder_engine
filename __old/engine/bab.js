$(function() {

$(".bab").each(function(){
    lvl = $(this).parent().attr("lvl");
    console.log(lvl);
    character_class_option = $(this).siblings("select#character-class-lvl"+lvl+".class-select")[0];
    character_class = character_class_option.options;
    console.log(character_class);
   //$(this).text(lvl*bab);
})
});