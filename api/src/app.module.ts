import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './modules/products/products.module';
import { CampaignModule } from './modules/campaigns/campaign.module';
import { LinksModule } from './modules/links/links.module';
import { RedirectModule } from './modules/redirect/redirect.module'
import { DashboardModule } from './modules/dashboard/dashboard.module';

@Module({
  imports: [
    // Load .env globally and make ConfigService available everywhere
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    ProductsModule,
    CampaignModule,
    LinksModule,
    RedirectModule,
    DashboardModule,
  ]
})
export class AppModule { }
