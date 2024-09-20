import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { category, brands, minPrice, maxPrice, minWeight, maxWeight, minRating, sortBy } = req.query;

  if (req.method === "GET") {
    try {
      const products = await prisma.product.findMany({
        where: { category: category as string, brand: brands ? { in: (brands as string).split(',')} : undefined, price: {
          gte: minPrice ? parseInt()
        } }, 
        
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
