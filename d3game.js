//Practice Game in D3
var gameOptions = {
  width: 500,
  height: 500,
  numEnemies: 10
};



var testPlayer = {
  x: gameOptions.width/2,
  y: gameOptions.height/2,
  width: 50,
  height: 50,
  link: 'player.png'
};

var playerData = [testPlayer];

var svg = d3.select('body').append('svg')
  // .attr('width', gameOptions.width).attr('height', gameOptions.height);

var drag = d3.behavior.drag()
  .on('drag', dragMove);

d3.select("body")
    .on("keydown", function() {
      var key = d3.event.keyCode;
      console.log(key);
      if(key === 37){ //go left
        testPlayer.x -= 30;
      } 
      if(key === 38){ //go up
        d3.event.preventDefault();
        testPlayer.y -= 30;
      } 
      if(key === 39){ // go right
        testPlayer.x += 30;
      } 
      if(key === 40){ // go down
        d3.event.preventDefault();
        testPlayer.y += 30;
      } 
      update(playerData);
      
    });
//37 = left
//38 = top
//39 =right
//40 = down

function dragMove(d){
  var x = d3.event.x;
  var y = d3.event.y;

  d3.select(this).attr('x', x).attr('y', y);
  console.log('dragging');
  testPlayer.x = x;
  testPlayer.y = y;
}

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
      }).call(drag);

  // EXIT
  // Remove old elements as needed.
  player.exit().remove();

  player.transition().duration(300).attr('x', function(d){
    return d.x;
  }).attr('y', function(d){
    return d.y;
  }).attr('width', function(d){
    return d.width;
  }).attr('height', function(d){
    return d.height;
  });
}

//First update
update(playerData);
// Grab a random sample of letters from the alphabet, in alphabetical order.
// setInterval(function() {
//   update(playerData);
// }, 1000);
