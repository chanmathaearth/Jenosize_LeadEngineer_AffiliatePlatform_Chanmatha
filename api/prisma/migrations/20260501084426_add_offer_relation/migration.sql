-- CreateTable
CREATE TABLE "Offer" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "marketplace" TEXT NOT NULL,
    "store_name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "last_checked_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Offer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
