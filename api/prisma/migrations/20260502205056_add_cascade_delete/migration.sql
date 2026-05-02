-- DropForeignKey
ALTER TABLE "Click" DROP CONSTRAINT "Click_link_id_fkey";

-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_campaign_id_fkey";

-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_product_id_fkey";

-- DropForeignKey
ALTER TABLE "Offer" DROP CONSTRAINT "Offer_product_id_fkey";

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_campaign_id_fkey" FOREIGN KEY ("campaign_id") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Click" ADD CONSTRAINT "Click_link_id_fkey" FOREIGN KEY ("link_id") REFERENCES "Link"("id") ON DELETE CASCADE ON UPDATE CASCADE;
