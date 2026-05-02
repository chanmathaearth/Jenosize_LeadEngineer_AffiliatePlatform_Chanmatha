import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ProductResponseDto } from './dto/product-response.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { mockFetchProductData } from './adapters/mock-product.adapter';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) { }

  async findAll(): Promise<ProductResponseDto[]> {
    const products = await this.prisma.product.findMany({
      include: {
        offers: true,
        links: true,
      },
    });

    return products.map((product) => ({
      id: product.id,
      title: product.title,
      image_url: product.image_url,
      offers: product.offers,
      links: product.links,
      best_price: Math.min(...product.offers.map((offer) => offer.price)),
    }));
  }

  async getOffers(productId: number) {
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
      include: {
        offers: true,
      },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return {
      id: product.id,
      title: product.title,
      image_url: product.image_url,
      offers: product.offers,
      best_price: Math.min(...product.offers.map((offer) => offer.price)),
    };
  }

  async create(dto: CreateProductDto): Promise<ProductResponseDto> {
    const mockData = mockFetchProductData(dto.source_url);

    const product = await this.prisma.product.create({
      data: {
        title: mockData.title,
        image_url: mockData.image_url,
        offers: {
          create: mockData.offers,
        },
      },
      include: {
        offers: true,
      },
    });

    return {
      id: product.id,
      title: product.title,
      image_url: product.image_url,
      offers: product.offers,
      best_price: Math.min(...product.offers.map((offer) => offer.price)),
    };
  }
}
