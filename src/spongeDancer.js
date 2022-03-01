var SpongeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img src=https://i.gifer.com/yB.gif class="spongeDancer" />');
  // Call our Dancer constructor with the correct arguments
  Dancer.call(this, top, left, timeBetweenSteps);
  SpongeDancer.maxWidth = $("body").height();
  SpongeDancer.maxHeight = $("body").width();

};

// Link our Sponge prototype to our Dancer prototype
SpongeDancer.prototype = Object.create(Dancer.prototype);

// Reset our Sponge constructor to be Sponge
SpongeDancer.prototype.constructor = SpongeDancer;


// Create new step method
SpongeDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

