export class OrderItem {
    id: number;
    product_title: string;
    price: number;
    quantity: number;
    
    constructor(id = 0, product_title = '', last_name = '', quantity = 0, price = 0, order_items = []) {
        this.id = id;
        this.product_title= product_title;
        this.price= price;
        this.quantity = quantity;
    }
}