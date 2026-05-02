import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CampaignsService } from './campaign.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { CampaignResponseDto } from './dto/campaign-response.dto';

@ApiTags('campaigns')
@Controller('campaigns')
export class CampaignsController {
  constructor(private readonly campaignService: CampaignsService) { }

  @Post()
  @ApiOperation({ summary: 'Create Campaigns' })
  create(@Body() dto: CreateCampaignDto): Promise<CampaignResponseDto> {
    return this.campaignService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all campaigns' })
  @ApiResponse({
    status: 200,
    description: 'Campaign list',
    type: [CampaignResponseDto],
  })
  findAll(): Promise<CampaignResponseDto[]> {
    return this.campaignService.findAll();
  }
}
