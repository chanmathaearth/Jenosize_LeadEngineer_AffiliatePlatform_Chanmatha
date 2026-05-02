import { ApiProperty } from '@nestjs/swagger';

export class CampaignResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Summer Sale 2026' })
  name: string;

  @ApiProperty({ example: 'summer_sale_2026' })
  utm_campaign: string;

  @ApiProperty({ example: '2026-05-01T00:00:00.000Z' })
  start_at: Date;

  @ApiProperty({ example: '2026-05-31T23:59:59.000Z' })
  end_at: Date;
}