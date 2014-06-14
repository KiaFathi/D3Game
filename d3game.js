//Practice Game in D3

var gameOptions = {
  width: 500,
  height: 500,
  numEnemies: 10
};

var playerData = [];

var testPlayer = {
  x: gameOptions.width/2,
  y: gameOptions.height/2,
  width: 50,
  height: 50,
  link: 'http://img84.imageshack.us/img84/4743/rogerr.gif'
};

playerData.push(testPlayer);

var svg = d3.select('body').append('svg')
  .attr('width', gameOptions.width).attr('height', gameOptions.height);

function update(data) {

  // DATA JOIN
  // Join new data with old elements, if any.
  var player = svg.selectAll("image")
      .data(data);

  // ENTER
  // Create new elements as needed.
  player.enter().append("image")
      .attr("x", function(d) { return d.x;})
      .attr("y", function(d) { return d.y;})
      .attr("width", function(d) { return d.width;})
      .attr("height", function(d) { return d.height;})
      .attr('xlink:href', function(d){
        return d.link;
      });

  // EXIT
  // Remove old elements as needed.
  player.exit().remove();

  player.transition().ease('linear').duration(1000).attr('x', function(d){
    return d.x;
  }).attr('y', function(d){
    return d.y;
  }).attr('width', function(d){
    return d.width;
  }).attr('height', function(d){
    return d.height;
  });
}


// Grab a random sample of letters from the alphabet, in alphabetical order.
setInterval(function() {
  var newData =[];
  var scale = Math.random()*75 +25;
  var newPlayer = {
    x: (gameOptions.width -60) * Math.random(),
    y: (gameOptions.height - 60) * Math.random(),
    width: scale,
    height: scale,
    link: 'rogerr.gif'
  };
  newData.push(newPlayer);
  update(newData);
}, 1000);
