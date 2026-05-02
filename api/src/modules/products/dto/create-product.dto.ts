import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'https://shopee.co.th/airpods',
    description: 'Shopee or Lazada product URL',
  })
  @IsUrl()
  @IsNotEmpty()
  source_url: string;
}
