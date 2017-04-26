
var div = document.getElementById('canvas');
var context = div.getContext('2d');
var svg = new Image();
svg.src = "blank.svg";
svg.onload = function(){
    context.drawImage( svg, 0, 0);
}






