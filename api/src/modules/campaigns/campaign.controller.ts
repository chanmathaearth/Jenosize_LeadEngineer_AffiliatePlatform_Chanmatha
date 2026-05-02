import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CampaignsService } from './campaign.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { CampaignResponseDto } from './dto/campaign-response.dto';

@ApiTags('campaigns')
@Controller('campaigns')
export class CampaignsController {
  constructor(private readonly campaignService: CampaignsService) {}

  @Post()
  @ApiOperation({ summary: 'Create Campaigns' })
  create(@Body() dto: CreateCampaignDto): Promise<CampaignResponseDto> {
    return this.campaignService.create(dto);
  }
}
