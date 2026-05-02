import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class LinkResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'abc123' })
  short_code: string;

  @ApiProperty({ example: 'https://shopee.co.th/iphone' })
  target_url: string;

  @ApiProperty({ example: 'Shopee' })
  marketplace: string;

  @ApiProperty({ example: 1 })
  product_id: number;

  @ApiProperty({ example: 1 })
  campaign_id: number;
}

export class CampaignResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Summer Sale 2026' })
  name: string;

  @ApiProperty({ example: 'summer_sale_2026' })
  utm_campaign: string;

  @ApiPropertyOptional({ type: [LinkResponseDto] })
  links?: LinkResponseDto[];

  @ApiProperty({ example: '2026-05-01T00:00:00.000Z' })
  start_at: Date;

  @ApiProperty({ example: '2026-05-31T23:59:59.000Z' })
  end_at: Date;
}
