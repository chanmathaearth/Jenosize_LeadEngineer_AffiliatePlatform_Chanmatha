import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class RedirectService {
    constructor(private readonly prisma: PrismaService) { }

    async findByShortCode(shortCode: string) {
        const link = await this.prisma.link.findUnique({
            where: { short_code: shortCode },
        });

        if (!link) {
            throw new NotFoundException('Link not found');
        }

        return link;
    }

    async trackClick(linkId: number) {
        return this.prisma.click.create({
            data: {
                link_id: linkId,
            },
        });
    }
}