var direBonjour = function(parametre){
	return 'Bonjour ' + parametre;
}

var bonjourDamien = function(callback, parametre){
	var retourDeLaFonction = callback(parametre);
	console.log(retourDeLaFonction);
	return 'Bravo, Bienvenue dans le monde merveilleux des fonctions qui s\'appellent !'
}

bonjourDamien(direBonjour, 'Damien');



// J'ai menti dans la partie sur les fonctions !! 

var fonctionAnonyme = function(){
	console.log('Je ne suis pas une fonction classique, je suis une fonction sans nom');
}

function fonctionClassique(){
	console.log('Je suis une fonction classique !!');
};

fonctionAnonyme();
fonctionClassique();

(
	function(){
	console.log('Je ne suis pas une fonction classique, mon nom est personne !');
}
)();