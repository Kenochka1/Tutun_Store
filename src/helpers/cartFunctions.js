export function getCountTabaccosCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.tabaccos.length : 0;
}

export function calcSubPrice(tabacco) {
  return tabacco.count * tabacco.item.price;
}

export function calcTotalPrice(tabaccos) {
  let totalPrice = 0;
  tabaccos.forEach((item) => {
    totalPrice += item.subPrice;
  });
  return totalPrice;
}
