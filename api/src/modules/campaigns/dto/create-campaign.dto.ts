import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateCampaignDto {
  @ApiProperty({
    example: 'Campaign Name',
    description: 'Campaign name',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Campaign UTM',
    description: 'Campaign UTM',
  })
  @IsString()
  @IsNotEmpty()
  utm_campaign: string;

  @ApiProperty({
    example: '2022-01-01T00:00:00Z',
    description: 'Campaign start date',
  })
  @IsString()
  @IsNotEmpty()
  start_at: string;

  @ApiProperty({
    example: '2022-01-01T00:00:00Z',
    description: 'Campaign end date',
  })
  @IsString()
  @IsNotEmpty()
  end_at: string;
}
