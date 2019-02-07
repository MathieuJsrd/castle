//Site suivi pour le scraping des données
//https://www.digitalocean.com/community/tutorials/how-to-use-node-js-request-and-cheerio-to-set-up-simple-web-scraping?fbclid=IwAR0Z8FzoSoPXSEVkGKJQTHW_hjdAQZ9ht-5gWXbD10TWCJHs3rGKmFKR3A8

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Loading of all module dependencies
var request = require('request');
var cheerio = require('cheerio');

//display the html of the 'url'


//Objectives :
//Here we need to return all the restaurants names, to know which
// one is one, two or three stars graded 


//Here, I've looked for, on the website, all the restaurants graded
//by at least one star => according the 'url'

/*request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    console.log(html);
  }
}); */

//After a quick look at the web developper console, I understood that
//I need the "attr-gtm-title" arg to get the name of the restaurant
//which is in a <div> tag



//there are 35 pages of restaurants
//At the end of each web url there's a [...]/page-i => i =1,2,3...,35
function getRestoTab(){
	
}
tab = new Array(700);
var save = -17;
for(var i = 1; i <= 1; i++) //on fixe à 40 pour être "sur"
{
	// All the https requests are done before loading the html in $
	var url = 'https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-' + i;
	request(url, function (error, response, html) {
		//Once if there's no error
	  if (!error && response.statusCode == 200) {
	    //We load all the [i] html into $ until the <div> tag : class = "div.poi_card-display-title" 
			var $ = cheerio.load(html);
			//We target div.poi_card-display-title tag into the html 
			
	    $('div.poi_card-display-title').each(function(i, element){  
				loadDollard(this, $).then(function(resultDiv){
					strAssignation(resultDiv).then(function (result){
						var nomResto = result;
						saveIncrementation(save).then(function(saveResult){
							save = saveResult;
							tab[save + i] = nomResto;
						})
					});
				})
				//var div = $(this);

				//var str = div.text();
				//We display the text into div tag
				//console.log(str); //return the <div> text => the restaurant name				
			});			
	  }
	})	
}


function endLoading(html){
	return new Promise(function(resolve, reject){
		var $ = cheerio.load(html);
		resolve("success");
	})
}
function strAssignation(divData){
	return new Promise(function(resolve, reject){
		var str = divData.text();
		resolve(str);
	})
}
function loadDollard(element, $){
	return new Promise(function (resolve, reject){
		var div = $(element);
		resolve(div);
	})
}
function saveIncrementation(saveI){
	return new Promise(function(resolve, reject){
		saveI += 17;
		resolve(saveI);
	})
}
