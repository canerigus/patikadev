const arguments = process.argv.slice(2);
const pi = Math.PI;
function Area(r) {
  r = parseInt(r);
  console.log(r*r*pi);
}
Area(arguments[0]);