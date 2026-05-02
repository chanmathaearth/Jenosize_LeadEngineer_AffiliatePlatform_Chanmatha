import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateLinkDto {
  @ApiProperty({
    example: 1,
    description: 'Product ID',
  })
  @IsInt()
  @IsNotEmpty()
  product_id: number;

  @ApiProperty({
    example: 1,
    description: 'Campaign ID',
  })
  @IsInt()
  @IsNotEmpty()
  campaign_id: number;
}