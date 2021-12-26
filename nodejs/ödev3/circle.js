const pi = Math.PI;

function circleArea(r) {
  r = parseInt(r);
  const alan = r * r * pi;
  console.log(Math.round(alan * 100) / 100);
}


function circleCircumference(r) {
  r = parseInt(r);
  const cevre = 2 * r * pi;
  console.log(Math.round(cevre * 100) / 100);
}

module.exports = {
  circleArea,
  circleCircumference
}