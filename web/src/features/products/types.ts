export interface Offer {
  id: string;
  marketplace: string;
  store_name: string;
  price: number;
  url?: string;
  short_code?: string;
}

export interface Product {
  id: string;
  title: string;
  image: string;
  source_url: string;
  offers: Offer[];
}
