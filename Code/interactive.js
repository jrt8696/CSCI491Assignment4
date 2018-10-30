var canvas = document.getElementById('interactive');
var ctx = canvas.getContext('2d');
window.localStorage.setItem("x", 400);
window.localStorage.setItem("y",400);
var interval = setInterval(drawInteractive,16);
window.localStorage.setItem("pointX",Math.random() *760);
window.localStorage.setItem("pointY",Math.random() *760);
window.localStorage.setItem("enemyX",Math.random() *760);
window.localStorage.setItem("enemyY",Math.random() *760);

window.localStorage.setItem("points",0);
$('body').on('keypress',function (e){
    var actualKeyCode = e.keyCode;
    var actualCharacter = String.fromCharCode(actualKeyCode);
    var y = parseInt(window.localStorage.getItem("y"));
    var x = parseInt(window.localStorage.getItem("x"));
    if(actualCharacter ==="w"){
        if(y-10 >=0){
            y-=10;
        }
    }
    else if(actualCharacter ==="a"){
        if(x - 10 >= 0){
            x -=10;
        }
    }
    else if(actualCharacter ==="s"){
        if (y + 10 < 760){
            y +=10;
        }
    }
    else if(actualCharacter ==="d"){
        if (x + 10 < 760){
            x +=10;
        }
    }
    window.localStorage.setItem("y",y);
    window.localStorage.setItem("x",x);
});
function checkCollision(x1,y1,h1,w1,x2,y2,h2,w2){
    
      if (x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2)
      {
        return true;  
      }
      else
      {
        return false;      
      }  
}
function getPoints(){
    window.localStorage.setItem("points",parseInt(window.localStorage.getItem("points") )+1);
    $('#points').html("Points " + window.localStorage.getItem("points"));
    var pointX = Math.random() * 760;
    var pointY = Math.random() * 760;
    window.localStorage.setItem("pointX",pointX);
    window.localStorage.setItem("pointY",pointY);
}
function fail(){
    clearInterval(interval);
    $('#points').html("YOU LOST, YOUR FINAL SCORE WAS " + window.localStorage.getItem("points"));
}


function drawInteractive(){
    var y = parseInt(window.localStorage.getItem("y"));
    var x = parseInt(window.localStorage.getItem("x"));
    var enemyX = parseInt(window.localStorage.getItem("enemyX"));
    var enemyY = parseInt(window.localStorage.getItem("enemyY"));
    var pointX = parseInt(window.localStorage.getItem("pointX"));
    var pointY = parseInt(window.localStorage.getItem("pointY"));
    if(checkCollision(x,y,50,50,pointX,pointY,50,50)){
        getPoints();
    }
    if(checkCollision(x,y,50,50,enemyX,enemyY,50,50)){
        fail();
    }
    ctx.clearRect(0,0, canvas.width,canvas.height);
    ctx.fillStyle = 'black';
    ctx.fillRect(x,y,50,50);
    ctx.fillStyle = 'Chartreuse';
    ctx.fillRect(pointX,pointY,50,50);
    ctx.fillStyle = 'red';
    ctx.fillRect(enemyX,enemyY,50,50);
}