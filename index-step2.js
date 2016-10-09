$(document).ready(pied);
// Fonction principale
function pied() {
	function clickValider() {
		var wholeNumber = $("input").val();

		function wH(min, max) {
			min= Math.ceil(min); 
			max= Math.floor(max);
			return Math.floor(Math.random()*( max- min+1))+1  
		}
		var foo = wH(42, 77);
		console.log(foo);
	if ( wholeNumber == wH) 
		{alert("you WON")
	else   (wholeNumber > wH){
		alert("you LOSE")
	}

		
	clickValider();  
	 $("button").click(function () {
		clickValider();

}