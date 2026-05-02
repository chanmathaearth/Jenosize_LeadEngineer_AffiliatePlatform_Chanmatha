export interface DashboardStats {
  total_clicks: number;
  clicks_by_product: { product_name: string; clicks: number }[];
  clicks_by_marketplace: { marketplace: string; clicks: number }[];
  clicks_by_campaign: { campaign_name: string; clicks: number }[];
}
