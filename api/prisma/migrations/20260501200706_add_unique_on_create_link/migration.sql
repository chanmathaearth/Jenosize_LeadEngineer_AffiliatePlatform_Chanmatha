/*
  Warnings:

  - A unique constraint covering the columns `[product_id,campaign_id,marketplace]` on the table `Link` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Link_product_id_campaign_id_marketplace_key" ON "Link"("product_id", "campaign_id", "marketplace");
