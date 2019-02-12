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



//there are 35 pages of restaurants (626)
//The page only displays 10 restaurants per page
//At the end of each web url there's a [...]/page-i => i =1,2,3...,35


var restaurantArray = new Array();
var counter=0;

var getMichelinArray = function(callback){
  for(var i=1;i<39;i++)
  {
      counter++;
    request('https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-'+i+'', function (error, response, html) {
      if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        //Get and select the div in which we can read each name of each restaurant in the html
        $('div.poi_card-display-title').each(function(i, element){  
          var div = $(this);
          //console.log(div.text()); //return the <div> text => the restaurant name
          //We add the name of the restaurant
          restaurantArray.push(div.text().trim())

          if(counter == 38)
          {
            //Return the array loaded into getMichelinArray
            callback(restaurantArray);
          }
      });
      }
    });
  }
}
module.exports = getMichelinArray;
