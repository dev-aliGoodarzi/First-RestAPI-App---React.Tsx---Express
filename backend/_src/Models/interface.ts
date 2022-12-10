export interface I_Movie {
  id: number;
  name: string;
  description: string;
  price: number | string;
}

export interface userBasket {
  basketItem: I_Movie;
  quantity: number;
}
