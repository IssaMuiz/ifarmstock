import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Matured Live Broiler",
        category: "matured-live-broilers",
        image: "/assets/images/poultry-image1-slider.jpg",
        price: 2000,
        quantity: 20,
        rating: 20,
        itemLeft: 200,
        soldCount: 30,
        brand: "Agrited",
        minimum: 10,
        discountTier: "20",
      },
      {
        name: "Day Old Chicks",
        category: "day-old-chicks",
        image: "/assets/images/poultry-image2-slider.jpg",
        price: 200,
        quantity: 20,
        rating: 20,
        itemLeft: 200,
        soldCount: 30,
        brand: "Obasanjo",
        minimum: 10,
        discountTier: "20",
      },
    ],
  });

  console.log("Database seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
