$(document).ready(function() {

	$("#popUp_form").submit(function() {
		$.ajax({
			type: "POST",
			url: "popUp.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$("#popUp_form").trigger("reset");
		});
		return false;
	});
});