-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "Wine" INTEGER,
    "Beer" INTEGER,
    "Staff" INTEGER,
    "Avability_Of_Products" INTEGER,
    "Prom_And_Disc" INTEGER,
    "Environment" INTEGER,
    "Online_Orders" INTEGER,
    "OverAll" INTEGER,
    "Time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);
