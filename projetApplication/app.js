'use strict';


const getArrayFromMichelin = require("./scrape_michelin/index.js");
const getArrayFromRelais = require("./scrape_restaurant/index.js");
//const data = require(".scrape_restaurant/hotelUrls.js"); //return an array




//Return in a array 150 url from relais chateau
function loadRestaurantUrl(){
    var restUrl = new Array();
    return new Promise(function(resolve, reject){
        getArrayFromRelais(function(response){
            restUrl = response;
            if(restUrl.length == 150)
            {
                resolve(restUrl);
            }
        })
    }).then(function(result){
        console.log(result);
    })
}

//Load in an array all the restaurant names from michelin.com
async function loadMichelin()
{
    var restArray = new Array();
    const restaurantNameMichelinArray = await getArrayFromMichelin();
    console.log(restaurantNameMichelinArray);    
}



//loadMichelin();
//loadRestaurantUrl();





