import { ApiProperty } from '@nestjs/swagger';

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