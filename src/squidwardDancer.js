var SquidwardDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img src= https://pngarchive.com/public/uploads/preview/squidward-dab-1001568333204gnl18t5ius.png class="squidwardDancer"/>');
  Dancer.call(this, top, left, timeBetweenSteps);
};

SquidwardDancer.prototype = Object.create(Dancer.prototype);

SquidwardDancer.prototype.constructor = SquidwardDancer;

SquidwardDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};