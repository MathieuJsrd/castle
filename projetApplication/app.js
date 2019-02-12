'use strict';


const getArrayFromMichelin = require("./scrape_michelin/index.js");
const getArrayFromRelais = require("./scrape_relais/index.js");
//console.log(getArrayFromRelais);

function loadMichelin()
{
    var restArray = new Array();
    return new Promise(function(resolve,reject){
        //We execute the function to get all the name from Michelin website
        getArrayFromMichelin(function(response){
            restArray = response;
            //When the array has all the restaurants (626)
            if(restArray.length == 626){
                //return the promise
                resolve(restArray);
            }
        })
        //Affichage tab, once we have the promise returned
    }).then(function(result){
        console.log(result);
    })
    
}
function loadRelais()
{
    var relaisArray = new Array();
    return new Promise(function(resolve, reject){
        getArrayFromRelais(function(response){
            relaisArray = response;
            //There're 150 hotels
            if(relaisArray.length == 150){
                console.log("on passe")
                resolve(relaisArray);
            }
        })
    }).then(function(result){
        for(var i = 0; i < result.length; i++)
        {
            console.log(i+" > " + result[i]);
        }
        //console.log(result);
    })
}

//loadMichelin();

loadRelais();




