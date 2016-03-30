var majorCities = {BC: ["Vancouver", "Victoria", "Prince George"], AB: ["Edmonton", "Calgary"]};
var numberCities = function(majorCities) {
  for (var province in majorCities) {
    console.log(province + " has " + majorCities[province].length + " main cities ");
  }
}
console.log(numberCities(majorCities));
