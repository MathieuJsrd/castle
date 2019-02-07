
//Objectives :
//Here, we need to return all the restaurants name + its url

//Indeed, on 'https://www.relaischateaux.com/us/search/results' page, we have all the hotel/restaurant available in France in 76 pages (!)
//But we don't have access to each restaurant of each hotel
//If we click on one of the hostels, here is the common url 'https://www.relaischateaux.com/us/france/troisgros-loire-ouches' 
// "troisgros-loire-ouches" is the only text changing between all the others hotel pages
//So we need to find in 'https://www.relaischateaux.com/us/search/results' page this previous url
//If we inspect the element : we find : 
//Once we are on the hotel page, if we inspect the restaurant's name in the restaurant tab
//We can find the name in the html file : <h3 itemprop="name" class="mainTitle2 noVerticalMargin"> Le Bois sans Feuilles</h3>

//Link to the website explaining the fetch api
//https://www.taniarascia.com/how-to-use-the-javascript-fetch-api-to-get-json-data/

const fetch = require('node-fetch');
var cheerio = require('cheerio');

//The fetch() method takes one mandatory argument, the path to the resource you want to fetch
//It returns a Promise that resolves to the Response to that request, whether it is successful or no


//var url = 'https://www.relaischateaux.com/us/destinations/europe/france';
//this url presents all the 150 hotels
//BUT those hotels are from a internet request 
//So we can't do in the same way than Michelin
//Because in michelin page all the information are in the html

var tab = [];
var compt =0;

for( var i =0; i < 8; i++)
{

	fetch("https://www.relaischateaux.com/fr/update-destination-results", 
	{"credentials":"include","headers":{"accept":"/","accept-language":"fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
	"content-type":"application/x-www-form-urlencoded; charset=UTF-8","x-requested-with":"XMLHttpRequest"},
	"referrer":"https://www.relaischateaux.com/fr/destinations/europe/france","referrerPolicy":"origin-when-cross-origin",
	"body":"page="+i+"&areaId=78","method":"POST","mode":"cors"})
	//Once the fetch is received ...
.then(function(response)
{
	//=> json traduction...
	response.json().then(function(value)
	{
		//=> html traduction
		var rep_html = cheerio.load(value.html);
		rep_html('h3').each(function(i,element)
		{
			var a = rep_html(this);
			//console.log(a.text())
			tab[compt] = a.children().attr('href');
			compt++;

		});
		tab.forEach(ele => console.log(ele));


	})
}).catch(err => console.log("ERROR"));

}