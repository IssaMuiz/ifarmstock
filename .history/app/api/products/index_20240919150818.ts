import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    page = "1",
    limit = "10",
    priceRanges,
    brand,
    weightRanges,
    rating,
    sortBy,
    category,
  } = req.query;

  const currentPage = parseInt(page as string);
  const productPerPage = parseInt(limit as string);
  const skip = (currentPage - 1) * productPerPage;

  try {
    let whereClause: any = {};

    // Price filter
    if (priceRanges) {
      const [minPrice, maxPrice] = (priceRanges as string)
        .split("-")
        .map(Number);
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
    if (weightRanges) {
      const [minWeight, maxWeight] = (weightRanges as string)
        .split("-")
        .map(Number);
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

    const totalItems = await prisma.product.count({ where: whereClause });

    const products = await prisma.product.findMany({
      where: whereClause,
      orderBy,
      skip,
      take: productPerPage,
    });

    const totalPages = Math.ceil(totalItems / productPerPage);
    res.status(200).json({ products, totalItems, totalPages, currentPage });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!" });
  }
}
