//Required libraries for scraping
let Promise = require('promise');
let request = require('request');
let cheerio = require('cheerio');
let fs = require('fs');


var restaurantArray = new Array();
var counter=0;

var getMichelinArray = function(){
  return new Promise(function(resolve, reject) {
      for(var i=1;i<39;i++){
        counter++;
        request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-'+i+'', function (error, response, html) {
          if (!error && response.statusCode == 200) {
              var $ = cheerio.load(html);
              //Get and select the div in which we can read each name of each restaurant in the html
              $('div.poi_card-display-title').each(function(i, element){  
                var div = $(this);
                //console.log(div.attr("class"));
                //console.log(div.text()); //return the <div> text => the restaurant name
                //We add the name of the restaurant
                //restaurantArray.push(div.text().trim())
                restaurantArray.push({
                "name": div.text().trim(),
                "chef": "",
                })
                //Return the array loaded into getMichelinArray
                if(restaurantArray.length == 626){
                  resolve(restaurantArray);
                }
              });
            }
        });
      }
  }); 
}

module.exports = getMichelinArray;

/*
function saveRestaurantsInJson() {
  return new Promise(function(resolve) {
    try {
      
      let jsonRestaurants = JSON.stringify(restaurantArray);
      fs.writeFile("michelinRestaurants.json", jsonRestaurants, function doneWriting(err) {
        if (err) {
          console.error(err);
        }
      });
    } catch (error) {
      console.error(error);
    }
    resolve(restaurantArray);
  });
}
*/

/*var aaa = async function(){
  await getMichelinArray(); //return a promise with a tab of 626 elements "name" : hdk, "chef": kslfj

  await saveRestaurantsInJson();
}*/


/*
module.exports.getRestaurantsJSON = function() {
  return JSON.parse(fs.readFileSync("michelinRestaurants.json"));
}; */

