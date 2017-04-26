
var div = document.getElementById('canvas');
var context = div.getContext('2d');
var svg = new Image();
svg.src = "general.svg";
svg.onload = function(){
    context.drawImage( svg, 0, 0);
}

var config = {
  container: document.getElementById('heat'),
  radius: 10,
  maxOpacity: .5,
  minOpacity: 0,
  blur: .75
};

var heatmapInstance = h337.create(config);


//C5
var dataPoint = { 
  x: 30,  
  y: 157, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//C4
var dataPoint = { 
  x: 30, 
  y: 195, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//C6
var dataPoint = { 
  x: 63,  
  y: 139, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//C7
var dataPoint = { 
  x: 90,  
  y: 139, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//C3
var dataPoint = { 
  x: 83, 
  y: 210, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//C2
var dataPoint = { 
  x: 112, 
  y: 210, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//C1
var dataPoint = { 
  x: 140, 
  y: 210, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//B6
var dataPoint = { 
  x: 152, 
  y: 244, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//B7
var dataPoint = { 
  x: 182, 
  y: 244, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//B5
var dataPoint = { 
  x: 122, 
  y: 260, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//B4
var dataPoint = { 
  x: 122, 
  y: 300, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//B3
var dataPoint = { 
  x: 174, 
  y: 315, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//B2
var dataPoint = { 
  x: 203, 
  y: 315, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//B1
var dataPoint = { 
  x: 231, 
  y: 315, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//D1
var dataPoint = { 
  x: 217,  
  y: 140, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//D2
var dataPoint = { 
  x: 217,  
  y: 111, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//D3
var dataPoint = { 
  x: 217,  
  y: 84, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//D4
var dataPoint = { 
  x: 202,  
  y: 32, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//D5
var dataPoint = { 
  x: 165,  
  y: 32, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//D6
var dataPoint = { 
  x: 143,  
  y: 65, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//D7
var dataPoint = { 
  x: 143,  
  y: 91, 
  value: 200 
};
heatmapInstance.addData(dataPoint);


var c = 2*290;


//C5
var dataPoint = { 
  x: c-30,  
  y: 157, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//C4
var dataPoint = { 
  x: c-30, 
  y: 195, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//C6
var dataPoint = { 
  x: c-63,  
  y: 139, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//C7
var dataPoint = { 
  x: c-90,  
  y: 139, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//C3
var dataPoint = { 
  x: c-83, 
  y: 210, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//C2
var dataPoint = { 
  x: c-112, 
  y: 210, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//C1
var dataPoint = { 
  x: c-140, 
  y: 210, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//B6
var dataPoint = { 
  x: c-152, 
  y: 244, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//B7
var dataPoint = { 
  x: c-182, 
  y: 244, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//B5
var dataPoint = { 
  x: c-122, 
  y: 260, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//B4
var dataPoint = { 
  x: c-122, 
  y: 300, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//B3
var dataPoint = { 
  x: c-174, 
  y: 315, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//B2
var dataPoint = { 
  x: c-203, 
  y: 315, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//B1
var dataPoint = { 
  x: c-231, 
  y: 315, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//D1
var dataPoint = { 
  x: c-217,  
  y: 140, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//D2
var dataPoint = { 
  x: c-217,  
  y: 111, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//D3
var dataPoint = { 
  x: c-217,  
  y: 84, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//D4
var dataPoint = { 
  x: c-202,  
  y: 32, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//D5
var dataPoint = { 
  x: c-165,  
  y: 32, 
  value: 200 
};
heatmapInstance.addData(dataPoint);

//D6
var dataPoint = { 
  x: c-143,  
  y: 65, 
  value: 200 
};
heatmapInstance.addData(dataPoint);


//D7
var dataPoint = { 
  x: c-143,  
  y: 91, 
  value: 200 
};
heatmapInstance.addData(dataPoint);




