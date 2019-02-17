//Required libraries for scraping
let Promise = require('promise');
let request = require('request');
let cheerio = require('cheerio');
let fs = require('fs');

let hotelUrl = require('./hotelUrls');

//On veut récupérer toutes les infos sur chaque resto de relais chateau
//Avec le prix, le nom, le chef..


async function generalUrlRestoLoad (){
    for(var index = 0; index <= 150; index++){
        //console.log("coucou");
        await loadingOfOneUrlResto(hotelUrl[index]);
        //console.log("au revoir");
    }
}
//var counter = 0;
function loadingOfOneUrlResto (urlTest){
    return new Promise(function(resolve,reject){
        request(urlTest, function(err, res, html) {
            if (err) {
              console.log(err);
              return reject(err);
            } else if (res.statusCode !== 200) {
              err = new Error("Unexpected status code : " + res.statusCode);
              err.res = res;
              return reject(err);
            }
            let $ = cheerio.load(html);
            $('ul.jsSecondNavMain').each(function(i, element){
                var ul = $(this);
                console.log(ul.children().next().children().attr('href')); //url de la page resto
                //counter++;
                resolve("success");
            });
        })
    
    })
}

//generalUrlRestoLoad();
//Result =>
let restoUrl = require('./urlResto');
var restoInformationArray = new Array();
urlTest = restoUrl[0];
//Here we have the url of the restaurant website

function nameResto (url){
    return new Promise(function(resolve,reject){
        request(url, function(err, res, html) {
            if (err) {
              console.log(err);
              return reject(err);
            } else if (res.statusCode !== 200) {
              err = new Error("Unexpected status code : " + res.statusCode);
              err.res = res;
              return reject(err);
            }
            let $ = cheerio.load(html);
            //Le html de la page est chargé
            //Il faut savoir si il y a plusieurs resto pour un hotel ou non
            //Pour cela, dans le html il y a une tag en dessous de 
            //<ul class="secondNavMain">
            //Si le .next() n'est pas <div class=jsSecondNavSub active"
            //Alors il n'y a un qu'un seul restaurant
            var ul = $('ul.jsSecondNavMain'); //unique dans le html
            //console.log(ul.attr("class"));
            if(ul.next().attr("class") == "jsSecondNavSub active"){ //alors il y a deux restos
                console.log("2 restos")
                var restoName;
                $('h3.mainTitle2.noVerticalMargin').first().each(function(i, element){
                    var h3 = $(this);
                    //console.log(h3.text().trim());
                    restoName = h3.text().trim();
                    restoInformationArray.push({
                        "name": restoName,
                        "chef": "",
                        })
                    //counter++;
                    //resolve("success");
                });
                var restoChief;
                $('h4.mainTitle2.noVerticalMargin.alignCenter.fsItalic.fzMedium').first().each(function(i, element){
                    var h4 = $(this);
                    //console.log(h4.text().trim());
                    restoChief = h4.text().replace("Chef", " ");
                    restoChief = restoChief.trim();

                    restoInformationArray[0].chef = restoChief;
                    //console.log(restoChief);
                    //counter++;
                    //resolve("success");
                });
                //Fin du premier resto
                //Il faut charger le deuxieme
                var ul = $('ul.jsSecondNavMain'); //unique dans le html
                var urlSecondResto = ul.next().children().next().children().attr('href');
                request(urlSecondResto, function(err, res, html) {
                    if (err) {
                      console.log(err);
                      return reject(err);
                    } else if (res.statusCode !== 200) {
                      err = new Error("Unexpected status code : " + res.statusCode);
                      err.res = res;
                      return reject(err);
                    }
                    let $ = cheerio.load(html);
                    
                });


            }
            //Il y a qu'un seul restaurant
            else{
                console.log("1 resto");
                var restoName;
                $('h3.mainTitle2.noVerticalMargin').first().each(function(i, element){
                    var h3 = $(this);
                    //console.log(h3.text().trim());
                    restoName = h3.text().trim();
                    restoInformationArray.push({
                        "name": restoName,
                        "chef": "",
                        })
                    //counter++;
                    //resolve("success");
                });
                var restoChief;
                $('h4.mainTitle2.noVerticalMargin.alignCenter.fsItalic.fzMedium').first().each(function(i, element){
                    var h4 = $(this);
                    //console.log(h4.text().trim());
                    restoChief = h4.text().replace("Chef", " ");
                    restoChief = restoChief.trim();

                    restoInformationArray[0].chef = restoChief;
                    //console.log(restoChief);
                    //counter++;
                    //resolve("success");
                });
            }
            
        })
    
    })
}
nameResto(urlTest);