-- CreateTable
CREATE TABLE "Bilty" (
    "id" SERIAL NOT NULL,
    "biltyNumber" INTEGER NOT NULL,
    "consignorName" TEXT NOT NULL,
    "consignorGST" TEXT,
    "consigneeName" TEXT NOT NULL,
    "consigneeGST" TEXT,
    "vehicleNumber" TEXT NOT NULL,
    "driverName" TEXT NOT NULL,
    "driverPhone" TEXT NOT NULL,
    "goodsDescription" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "weight" DECIMAL(65,30) NOT NULL,
    "freight" DECIMAL(65,30) NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Bilty_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bilty_userId_biltyNumber_key" ON "Bilty"("userId", "biltyNumber");

-- AddForeignKey
ALTER TABLE "Bilty" ADD CONSTRAINT "Bilty_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
