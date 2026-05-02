import { BadRequestException, NotFoundException } from '@nestjs/common';
import { LinksService } from './links.service';

describe('LinksService', () => {
  let service: LinksService;

  const mockPrisma = {
    product: {
      findUnique: jest.fn(),
    },
    link: {
      create: jest.fn(),
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
    service = new LinksService(mockPrisma as any);
  });

  it('should create links from product offers', async () => {
    mockPrisma.product.findUnique.mockResolvedValue({
      id: 1,
      offers: [
        {
          marketplace: 'Shopee',
          url: 'https://shopee.co.th/iphone',
        },
        {
          marketplace: 'Lazada',
          url: 'https://lazada.co.th/iphone',
        },
      ],
    });

    mockPrisma.link.create
      .mockResolvedValueOnce({
        id: 1,
        short_code: 'abc123',
        target_url: 'https://shopee.co.th/iphone',
        product_id: 1,
        campaign_id: 2,
        marketplace: 'Shopee',
      })
      .mockResolvedValueOnce({
        id: 2,
        short_code: 'def456',
        target_url: 'https://lazada.co.th/iphone',
        product_id: 1,
        campaign_id: 2,
        marketplace: 'Lazada',
      });

    const result = await service.create({
      product_id: 1,
      campaign_id: 2,
    });

    expect(result).toHaveLength(2);
    expect(result[0]?.marketplace).toBe('Shopee');
    expect(result[1]?.marketplace).toBe('Lazada');
    expect(mockPrisma.link.create).toHaveBeenCalledTimes(2);
  });

  it('should throw BadRequestException if campaign_id is missing', async () => {
    await expect(
      service.create({
        product_id: 1,
      } as any),
    ).rejects.toThrow(BadRequestException);
  });

  it('should throw NotFoundException if product not found', async () => {
    mockPrisma.product.findUnique.mockResolvedValue(null);

    await expect(
      service.create({
        product_id: 999,
        campaign_id: 1,
      }),
    ).rejects.toThrow(NotFoundException);
  });

  it('should throw BadRequestException if product has no offer url', async () => {
    mockPrisma.product.findUnique.mockResolvedValue({
      id: 1,
      offers: [
        {
          marketplace: 'Shopee',
          url: null,
        },
      ],
    });

    await expect(
      service.create({
        product_id: 1,
        campaign_id: 1,
      }),
    ).rejects.toThrow(BadRequestException);
  });
});