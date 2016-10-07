$(document).ready(main);

function main() {
	function clickValider() {
		var foo = $("input").val();
		if (foo == 7) {
			alert(" es-tu devin ? - Tu as gagné ");
		}
		else {
			alert("recommance");
		}
	}
	$("button").click(function () {
		clickValider();
	});
	alert("here");
}