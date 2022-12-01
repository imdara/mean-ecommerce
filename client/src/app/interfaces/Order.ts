interface Product {
  imgUrl: String;
  name: String;
  price: Number;
  quantity: Number;
}

export default interface Order {
  products: Product[];
  orderPlacedBy: String;
  orderTotal: Number;
  address: String;
}
