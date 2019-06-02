// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arrays = [];
  for (var i = 0; i < musicians.length; i++) {
    arrays.push(musicians[i] + " plays " + instruments[i]);
  }
  return arrays
}