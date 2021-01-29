$(function() {

let alignemnt_dropdown = $("#character-alignment");
alignemnt_dropdown.empty();

alignemnt_dropdown.append('<option selected="true" disabled>Choose Alignment</option>');
alignemnt_dropdown.prop('selectedIndex', 0);

const alignment_url = 'data/alignments.json';

// Populate dropdown with list of alignments
$.getJSON(alignment_url, function (data) {
  $.each(data, function (key, entry) {
    alignemnt_dropdown.append($('<option></option>').attr('value', entry.id).text(entry.name));
  })
})
});