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
//The page only displays 10 restaurants per page
//At the end of each web url there's a [...]/page-i => i =1,2,3...,35

function aaa () {
    return new Promise(function(resolve, reject){
        tab = [];
        for(var i = 0; i < 100; i++)
        {
            tab[i] = i;
        }
        resolve(tab);
    })
}

createTab().then(function(result){
    for(var i = 0; i < result.length; i++)
    {
        console.log(result[i]);
    }
    console.log("après stp");
})

function createTab(){
    return new Promise(function(resolve, reject){
        tab = [];
        var url = 'https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-1';
        request(url, function (error, response, html) {
            if (!error && response.statusCode == 200) {
                //We load all the html into $ until the <div> tag : class = "div.poi_card-display-title" 
                var $ = cheerio.load(html);
                $('div.poi_card-display-title').each(function(i, element){  
                    var div = $(this);
                    //console.log(div.text()); //return the <div> text => the restaurant name
                    tab[i] = div.text();
                });
                resolve(tab);
            }
        })

    })
}

