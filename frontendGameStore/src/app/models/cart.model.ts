// define how the CART OBJECT will look

import {ProductModelServer} from './product.model';

/*THE NUMBER OF ITEMS IN THE CART IN THE SERVER*/
export interface CartModelServer{
total: number;
data: [{
  product: ProductModelServer,
  numInCart: number // number of products in the cart
}];

}

// anything that i sent to the Client
/*NUMBER OF PRODUCTS IN CART MATCHING THIS PRODUCT ID*/
export interface CartModelPublic{

  total: number;
  prodData: [
    {
      id: number,
      incart: number // number of products of a specific ID product in the cart.
    }
  ];
}
