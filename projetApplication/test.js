var request = require('request');
var cheerio = require('cheerio');

tab = new Array(700);
var save = -17;

const getUrlRequests = () => {
    return new Promise (async (resolve, reject) => {
        var url = 'https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-1';
        await request(url, function (error, response, html){
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
        });
        resolve(tab);

    }
)}



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

module.exports(getUrlRequests);