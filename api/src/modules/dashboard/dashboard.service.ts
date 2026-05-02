import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DashboardService {
    constructor(private readonly prisma: PrismaService) { }

    async getSummary() {
        const totalClicks = await this.prisma.click.count();

        // 🔥 ดึงเฉพาะ link + relation (ไม่เอา click)
        const links = await this.prisma.link.findMany({
            include: {
                product: true,
                campaign: true,
            },
        });

        // 🔥 group click ใน DB แทน
        const clickCounts = await this.prisma.click.groupBy({
            by: ['link_id'],
            _count: true,
        });

        // map link_id → count
        const clickMap = new Map<number, number>();
        clickCounts.forEach((c) => {
            clickMap.set(c.link_id, c._count);
        });

        const clicksByCampaign = links
            .filter((link) => link.campaign.utm_campaign !== 'organic')
            .map((link) => ({
                campaign_id: link.campaign_id,
                campaign_name: link.campaign.name,
                clicks: clickMap.get(link.id) || 0,
            }));

        const productMap = new Map<number, any>();
        const marketplaceMap = new Map<string, number>();

        for (const link of links) {
            const clickCount = clickMap.get(link.id) || 0;

            productMap.set(link.product_id, {
                product_title: link.product.title,
                clicks: (productMap.get(link.product_id)?.clicks || 0) + clickCount,
            });

            marketplaceMap.set(
                link.marketplace,
                (marketplaceMap.get(link.marketplace) || 0) + clickCount,
            );
        }

        return {
            total_clicks: totalClicks,
            clicks_by_campaign: clicksByCampaign,
            clicks_by_product: Array.from(productMap.values()),
            clicks_by_marketplace: Array.from(marketplaceMap.entries()).map(
                ([marketplace, clicks]) => ({
                    marketplace,
                    clicks,
                }),
            ),
        };
    }
}
