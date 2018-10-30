var canvas2 = document.getElementById('flag');
var ctx2 = canvas2.getContext('2d');
var blueX = 0;
var blueY=0;

$(document).ready(function($){
    
    var req = new XMLHttpRequest();
    req.open("GET", "http://api.population.io/1.0/population/United%20States/today-and-tomorrow/?format=json", true);
    req.onload =function(){
        var data = JSON.parse(req.responseText);
        $('#population').html("The current population of the United States is " + data.total_population[1].population);
    };
    req.send();
});
function drawFlag(){
    ctx2.fillStyle = 'blue';
    ctx2.fillRect(blueX,blueY,425,375);
    ctx2.fillStyle = 'red';
    ctx2.fillRect(425,0,450,75);
    ctx2.fillRect(425,125,450,75);
    ctx2.fillRect(425,250,450,75);
    ctx2.fillRect(0,375,800,75);
    ctx2.fillRect(0,500,800,75);
    ctx2.fillRect(0,625,800,75);
    ctx2.fillRect(0,750,800,75);
    ctx2.fillStyle = "white";
    for(var i =0; i< 5; i++){
        for(var j= 0; j<10; j++){
            ctx2.fillRect((j * 40) + 20,(i * 80) + 20, 5, 5);
        }
    }
}