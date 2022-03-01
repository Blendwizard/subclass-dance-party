var SquidwardDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

SquidwardDancer.prototype = Object.create(Dancer.prototype);

SquidwardDancer.prototype.constructor = SquidwardDancer;

SquidwardDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({
    left: 1600 + 'px',
    top: 2370 + 'px'
  }, 5000, 'linear');
};