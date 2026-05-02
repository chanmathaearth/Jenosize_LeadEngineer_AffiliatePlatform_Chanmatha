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
  image_url: string;
  source_url: string;
  offers: Offer[];
  links?: { marketplace: string; short_code: string; campaign_id: number }[];
  best_price: number;
}
