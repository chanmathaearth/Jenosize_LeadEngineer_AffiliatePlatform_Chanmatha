import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class OfferResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1 })
  product_id: number;

  @ApiProperty({ example: 'Shopee' })
  marketplace: string;

  @ApiProperty({ example: 'Shopee Nike Store' })
  store_name: string;

  @ApiProperty({ example: 3990 })
  price: number;

  @ApiProperty({ example: '2026-05-01T10:00:00.000Z' })
  last_checked_at: Date;
}


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

export class ProductResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'https://example.com/image.jpg' })
  image_url: string;

  @ApiProperty({ example: 'Nike Air Max 270' })
  title: string;

  @ApiProperty({ type: [OfferResponseDto] })
  offers: OfferResponseDto[];

  @ApiPropertyOptional({ type: [LinkResponseDto] })
  links?: LinkResponseDto[];

  @ApiProperty({ example: 3990 })
  best_price: number;
}