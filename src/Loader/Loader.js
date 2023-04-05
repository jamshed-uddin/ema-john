import { getShoppingCart } from "../utilities/fakedb";

const dataLoader = async () => {
  const loadedData = await fetch("products.json");
  const data = await loadedData.json();

  const cart = getShoppingCart();
  // console.log(cart);
  const savedCart = [];
  for (const id in cart) {
    const addedProduct = data.find((pd) => pd.id === id);

    if (addedProduct) {
      const quantity = cart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }

  return savedCart;
};

export default dataLoader;
