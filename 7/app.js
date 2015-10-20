 
 var monObjetVoiture = {
	marque: 'scénic',
	annee: 2008,
	kilometrage: 1050,

	avancer: function(){
		this.kilometrage++;
		console.log('Vroom j\'ai avancé');
		return true;
	} 
}


var conduire = function(destination){
	return 'je conduis vers: ' + destination;
};

chauffeur = function(destination, action){
	return action(destination);
};

//chauffeur('Paris', conduire);