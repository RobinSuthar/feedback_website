import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const review = await prisma.review.create({
    data: {
      wineRating: 3,
      beerRating: 3,
      staffRating: 1,
      productAvailability: 2,
      promotionsAndDiscounts: 4,
      environmentRating: 2,
      onlineOrderRating: 4,
      overallRating: 2,
    },
  });
  console.log(review);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
