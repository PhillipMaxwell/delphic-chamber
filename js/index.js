var template = function(text) {
	return '<p>' + text + '</p>';
};

var add = function(item) {
	var html=template(item);
	$('div.comments-board').prepend(html);
	

}


$(document).ready(function(){
	$('#menu').accordion();

	$('form').submit(function() {
		var text=$('textarea#feedback').val();
		add(text);
		$('textarea#feedback').val(""); /* clear the comment box for the next comment */
		return false;
	});


});