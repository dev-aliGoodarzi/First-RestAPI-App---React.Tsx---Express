export interface I_Movie {
  name: string;
  description: string;
  price: number | string;
  image: string;
}

export interface userBasket {
  basketItem: I_Movie;
  quantity: number;
}
