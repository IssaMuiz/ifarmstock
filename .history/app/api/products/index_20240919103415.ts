import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { price, brand, weight, rating, sortBy } = req.query;

  try {
    let whereClause: any = {};

    // Price filter
    if (price) {
      const [minPrice, maxPrice] = (price as string).split("-").map(Number);
      whereClause.price = {
        gte: minPrice,
        lte: maxPrice,
      };
    }

    // Brand filter
    if (brand) {
      whereClause.brand = brand;
    }

    // Weight filter
    if (weight) {
      const [minWeight, maxWeight] = (weight as string).split("-").map(Number);
      whereClause.weight = {
        gte: minWeight,
        lte: maxWeight,
      };
    }

    // Rating filter
    if (rating) {
      whereClause.rating = {
        gte: Number(rating),
      };
    }

    // Sorting Logic
    let orderBy: any = {};
    if (sortBy) {
      if (sortBy === "price-low-high") {
        orderBy = { price: "asc" };
      } else if (sortBy === "price-high-low") {
        orderBy = { price: "desc" };
      } else if (sortBy === "best-seller") {
        orderBy = { salesCount: "desc" };
      } else if (sortBy === "new-arrival") {
        orderBy = { dateAdded: "desc" };
      }
    }

    const products = await prisma.product.findMany({
      where: whereClause,
      orderBy,
    });
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!" });
  }
}
