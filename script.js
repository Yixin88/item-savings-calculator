const receipt = [21.99, 10.67, 18.50];

function getCents(price) {
  const splitPrice = price.toString().split(".");
  return splitPrice[1];
}
