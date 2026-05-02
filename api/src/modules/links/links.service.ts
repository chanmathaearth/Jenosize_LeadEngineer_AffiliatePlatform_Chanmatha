import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateLinkDto } from './dto/create-links.dto';
import { LinkResponseDto } from './dto/links-response.dto';
import { randomBytes } from 'crypto';

@Injectable()
export class LinksService {
  constructor(private readonly prisma: PrismaService) {}

  private generateShortCode() {
    return randomBytes(3).toString('hex');
  }

  async create(dto: CreateLinkDto): Promise<LinkResponseDto[]> {
    if (!dto.campaign_id) {
      throw new BadRequestException('campaign_id is required');
    }

    const product = await this.prisma.product.findUnique({
      where: { id: dto.product_id },
      include: { offers: true },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    const offersWithUrl = product.offers.filter((offer) => offer.url);

    if (offersWithUrl.length === 0) {
      throw new BadRequestException('No offers with URL found');
    }

    const links = await Promise.all(
      offersWithUrl.map((offer) =>
        this.prisma.link.create({
          data: {
            product_id: product.id,
            campaign_id: dto.campaign_id,
            marketplace: offer.marketplace,
            target_url: offer.url,
            short_code: this.generateShortCode(),
          },
        }),
      ),
    );

    return links.map((link) => ({
      id: link.id,
      short_code: link.short_code,
      target_url: link.target_url,
      product_id: link.product_id,
      campaign_id: link.campaign_id,
      marketplace: link.marketplace,
    }));
  }
}