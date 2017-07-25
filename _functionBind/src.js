/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

var bind = function(
) {
  // TODO: Your code here
  var foo = arguments[0];
  var that = arguments[1];
  var args = Array.prototype.slice.call(arguments, 2);
  var bar = function() {
    var barArgs = Array.prototype.slice.call(arguments);
    var allArgs = args.concat(barArgs);
    return foo.apply(that, allArgs);
  };

  return bar;
};

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

Function.prototype.bind = function(
) {
  // TODO: Your code here
  var func = this;
  var that = arguments[0];
  var args = Array.prototype.slice.call(arguments, 1);
  var bar = function() {
    var barArgs = Array.prototype.slice.call(arguments);
    var allArgs = args.concat(barArgs);
    return func.apply(that, allArgs);
  };

  return bar;
};
