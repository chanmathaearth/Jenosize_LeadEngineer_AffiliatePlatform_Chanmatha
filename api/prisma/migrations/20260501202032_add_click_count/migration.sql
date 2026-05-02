-- CreateTable
CREATE TABLE "Click" (
    "id" SERIAL NOT NULL,
    "link_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Click_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Click" ADD CONSTRAINT "Click_link_id_fkey" FOREIGN KEY ("link_id") REFERENCES "Link"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
