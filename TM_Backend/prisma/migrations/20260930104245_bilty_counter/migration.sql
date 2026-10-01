-- CreateTable
CREATE TABLE "BiltyCounter" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "lastBiltyNumber" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "BiltyCounter_userId_key" ON "BiltyCounter"("userId");

-- AddForeignKey
ALTER TABLE "BiltyCounter" ADD CONSTRAINT "BiltyCounter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
