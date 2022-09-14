class CartItem {
  id: string
  quantity: number
  productPrice: string
  productTitle: string
  sum: number


  constructor(
    id: string,
    quantity: number,
    productPrice: string,
    productTitle: string,
    sum: number,
  ) {
    this.id = id
    this.quantity = quantity
    this.productPrice = productPrice
    this.productTitle = productTitle
    this.sum = sum
  }
}
