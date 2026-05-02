export interface Link {
  id: string;
  product_id: string;
  campaign_id: string;
  marketplace: string;
  short_code: string;
  original_url: string;
}

export interface CreateLinkDto {
  product_id: number;
  campaign_id: number;
}
