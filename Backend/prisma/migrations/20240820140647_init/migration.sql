/*
  Warnings:

  - Made the column `productID` on table `Cart` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image_url` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_productID_fkey";

-- AlterTable
ALTER TABLE "Cart" ALTER COLUMN "productID" SET NOT NULL;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "stock" DROP NOT NULL,
ALTER COLUMN "image_url" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_productID_fkey" FOREIGN KEY ("productID") REFERENCES "Product"("productID") ON DELETE RESTRICT ON UPDATE CASCADE;
