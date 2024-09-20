import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    category,
   price, brand, weight, rating, sortBy
  } = req.query;

  if (req.method === "GET") {
    try {
      const products = await prisma.product.findMany({
        where: {
          category: category as string,
          // filter by brand
          brand: brands ? { in: (brands as string).split(",") } : undefined,

          // filter by price range
          price: {
            gte: minPrice ? parseInt(minPrice as string) : undefined,
            lte: maxPrice ? parseInt(maxPrice as string) : undefined,
          },

          // filter by weight range
          weight: {
            gte: minWeight ? parseInt(minWeight as string) : undefined,
            lte: maxWeight ? parseInt(maxWeight as string) : undefined,
          },
          // filter by rating
          rating: {
            gte: minRating ? parseInt(minRating as string) : undefined,
          },
        },
        // Sorting based on sortBy parameter
        sortBy: (() => {
          switch (sortBy) {
            case "best-sellers":
              return { soldCount: "desc" };
            case "newest":
              return { dateAdded: "desc" };
            case "low-high":
              return { price: "asc" };
            case "high-low":
              return { price: "desc" };
            default:
              return undefined;
          }
        })(),
      });
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: "Error fetching products" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
