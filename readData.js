function readData(){
    var req = new XMLHttpRequest();
    req.open("GET","http://api.worldbank.org/countries/USA/indicators/NY.GDP.MKTP.CD?per_page=5000&format=json",true);
    req.onload = function(){
        var data = JSON.parse(req.responseText);
        data = data[1];
        var finalData = "The GDP of America throughout the years<br/>Year &nbsp $ Amount<br/>";
        data.forEach(function(e){
            //console.log(e)
            finalData = finalData + e.date + "&nbsp;" + e.value + "<br/>";
        });
        postMessage(finalData);
    }
    req.send();
}
readData();