import { getProducts } from "@/db/models/products";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const products = await getProducts();
  return NextResponse.json(products)
}