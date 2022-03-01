var GaryDancer = function(top, left, timeBetweenSteps) {
  // Call our Dancer constructor with the correct arguments
  Dancer.call(this, top, left, timeBetweenSteps);
};

// Link our Sponge prototype to our Dancer prototype
GaryDancer.prototype = Object.create(Dancer.prototype);

// Reset our Sponge constructor to be Sponge
GaryDancer.prototype.constructor = GaryDancer;


// Create new step method
GaryDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({
    left: '+=50',
  });
};