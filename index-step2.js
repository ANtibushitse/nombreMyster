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

		// Si le contenu est égal
		// Afficher une alert Gagné
		// Sinon s'il est supérieur
		// Afficher une alert Perdu, votre nombre est trop grand
		// Sinon s'il est inférieur
		// Afficher une alert Perdu, votre nombre est trop petit
	}
	clickValider();  // /Fin == Fonction clickValider ==
	 $("button").click(function () {
		clickValider();
	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus
}