import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { CampaignResponseDto } from './dto/campaign-response.dto';

@Injectable()
export class CampaignsService {

  constructor(private readonly prisma: PrismaService) { }

  async create(dto: CreateCampaignDto): Promise<CampaignResponseDto> {
    return await this.prisma.campaign.create({
      data: {
        name: dto.name,
        utm_campaign: dto.utm_campaign,
        start_at: new Date(dto.start_at),
        end_at: new Date(dto.end_at),
      },
    });
  }

  async findAll(): Promise<CampaignResponseDto[]> {
    const campaigns = await this.prisma.campaign.findMany({
      orderBy: {
        id: 'desc',
      },
    });

    return campaigns.map((campaign) => ({
      id: campaign.id,
      name: campaign.name,
      utm_campaign: campaign.utm_campaign,
      start_at: campaign.start_at,
      end_at: campaign.end_at,
    }));
  }
}
