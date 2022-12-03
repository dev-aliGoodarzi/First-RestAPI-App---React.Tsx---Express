export interface I_Movie {
  id: number;
  name: string;
  description: string;
  price: number | string;
  image: any;
}

export interface userBasket {
  basketItem: I_Movie;
  quantity: number;
}
