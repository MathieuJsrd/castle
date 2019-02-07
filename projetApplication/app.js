'use strict';


const getTabFromMichelin = require("./test.js");

getTabFromMichelin().then(function(result){
    tab = result;
    for(var i = 0; i < tab.length; i++)
    {
        console.log(tab[i]);
    }
})




