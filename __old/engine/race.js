$(function() {

let race_dropdown = $("#character-race");
race_dropdown.empty();

race_dropdown.append('<option selected="true" disabled>Choose Race</option>');
race_dropdown.prop('selectedIndex', 0);

const race_url = 'data/races.json';

// Populate race_dropdown with list of races
$.getJSON(race_url, function (data) {
  $.each(data, function (key, entry) {
    race_dropdown.append($('<option></option>').attr('value', entry.id).text(entry.name));
  })
})
});