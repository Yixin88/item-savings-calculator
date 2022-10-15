const receipt = [21.99, 10.67, 18.50];

function getCents(price) {
  const splitPrice = price.toString().split(".");
  return splitPrice[1];
}

function getsDiscount(rec) {
    let total = 0;
    for (let i = 0; i < rec.length; i++) {
      total += rec[i];
    }
    if (total > 50) {
      return true;
    } else {
      return false;
    }
  }
  