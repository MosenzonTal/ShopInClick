export interface ProductModelServer {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string; // main Image
  quantity: number;
  images: string;
}


export interface ServerResponse {
  count: number;
  products: ProductModelServer[];
}
