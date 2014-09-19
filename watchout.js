// start slingin' some d3 here.

var width = 1000;
var height = 500;
var enemyRadius = 10;
var numEnemies = 20;

var canvas = d3.select('body').append('svg')
  .attr('width', width)
  .attr('height', height);

var update = function(data) {
  //Data Join
  var enemies = canvas.selectAll('circle').data(data);

  //Update existing enemies with new coordinates
  enemies.transition().duration(500)
    .attr('cx', function(d, i){ return d.x; })
    .attr('cy', function(d, i){ return d.y;})
    .attr('r', enemyRadius+'px');

  //Enter - create new elements as needed
  enemies.enter().append('circle')
    .attr('class', 'enemy')
    .attr('cx', function(d, i){ return d.x; })
    .attr('cy', function(d, i){ return d.y;})
    .attr('r', enemyRadius+'px');
};

var coordinates = function(n){
  var array = [];
  for (var i=0; i<n; i++){
    var x = Math.random() * width;
    var y = Math.random() * height;

    array.push({'x':x, 'y':y});
  }
  return array;
};

update(coordinates(numEnemies));

setInterval(function(){update(coordinates(numEnemies));}, 1500);
