import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async getSummary() {
    const totalClicks = await this.prisma.click.count();

    const clicksByCampaign = await this.prisma.$queryRaw<
      {
        campaign_id: number;
        campaign_name: string;
        clicks: bigint;
      }[]
    >`
      SELECT 
        l.campaign_id,
        c.name AS campaign_name,
        COUNT(cl.id) AS clicks
      FROM "Click" cl
      JOIN "Link" l ON cl.link_id = l.id
      JOIN "Campaign" c ON l.campaign_id = c.id
      WHERE c.utm_campaign != 'organic'
      GROUP BY l.campaign_id, c.name
      ORDER BY clicks DESC
    `;

    const clicksByProduct = await this.prisma.$queryRaw<
      {
        product_id: number;
        product_title: string;
        clicks: bigint;
      }[]
    >`
      SELECT 
        l.product_id,
        p.title AS product_title,
        COUNT(cl.id) AS clicks
      FROM "Click" cl
      JOIN "Link" l ON cl.link_id = l.id
      JOIN "Product" p ON l.product_id = p.id
      GROUP BY l.product_id, p.title
      ORDER BY clicks DESC
    `;

    const clicksByMarketplace = await this.prisma.$queryRaw<
      {
        marketplace: string;
        clicks: bigint;
      }[]
    >`
      SELECT 
        l.marketplace,
        COUNT(cl.id) AS clicks
      FROM "Click" cl
      JOIN "Link" l ON cl.link_id = l.id
      GROUP BY l.marketplace
      ORDER BY clicks DESC
    `;

    return {
      total_clicks: totalClicks,
      clicks_by_campaign: clicksByCampaign.map((item) => ({
        campaign_id: item.campaign_id,
        campaign_name: item.campaign_name,
        clicks: Number(item.clicks),
      })),
      clicks_by_product: clicksByProduct.map((item) => ({
        product_id: item.product_id,
        product_title: item.product_title,
        clicks: Number(item.clicks),
      })),
      clicks_by_marketplace: clicksByMarketplace.map((item) => ({
        marketplace: item.marketplace,
        clicks: Number(item.clicks),
      })),
    };
  }
}