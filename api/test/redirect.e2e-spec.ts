import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';

describe('RedirectController (e2e)', () => {
    let app: INestApplication;
    let prisma: PrismaService;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        app.setGlobalPrefix('api');
        await app.init();

        prisma = app.get(PrismaService);
    });

    beforeEach(async () => {
        await prisma.click.deleteMany();
        await prisma.link.deleteMany();
        await prisma.campaign.deleteMany();
        await prisma.offer.deleteMany();
        await prisma.product.deleteMany();
    });

    afterAll(async () => {
        await app.close();
    });

    it('should redirect and create click record', async () => {
        const product = await prisma.product.create({
            data: {
                title: 'Test Product',
                image_url: 'https://example.com/image.jpg',
                offers: {
                    create: [
                        {
                            marketplace: 'Shopee',
                            store_name: 'Test Shopee Store',
                            price: 100,
                            url: 'https://shopee.co.th/test-product',
                        },
                        {
                            marketplace: 'Lazada',
                            store_name: 'Test Lazada Store',
                            price: 120,
                            url: 'https://www.lazada.co.th/products/test-product',
                        },
                    ],
                },
            },
        });

        const campaign = await prisma.campaign.create({
            data: {
                name: 'Test Campaign',
                utm_campaign: 'test_campaign',
                start_at: new Date(),
                end_at: new Date('2099-12-31'),
            },
        });
        const shortCode = `test-${Date.now()}`;
        const link = await prisma.link.create({
            data: {
                product_id: product.id,
                campaign_id: campaign.id,
                marketplace: 'Shopee',
                short_code: shortCode,
                target_url: 'https://shopee.co.th/test-product',
            },
        });

        await request(app.getHttpServer())
            .get(`/api/go/${shortCode}`)
            .expect(302)
            .expect('Location', link.target_url);

        const clickCount = await prisma.click.count({
            where: {
                link_id: link.id,
            },
        });

        expect(clickCount).toBe(1);
    });
});