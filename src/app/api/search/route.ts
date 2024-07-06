import { searchProducts } from "@/db/models/products";
import { NextRequest, NextResponse } from "next/server";
import { ProductModel } from "@/db/models/products";

interface SearchResponse {
  totalPage: number;
  result: ProductModel[];
}

export const GET = async (
  request: NextRequest
): Promise<NextResponse<SearchResponse>> => {
  const url = new URL(request.url);
  const value = url.searchParams.get('value') || '';
  console.log(url.searchParams);

  const result = await searchProducts(value);

  const response: SearchResponse = {
    totalPage: result.totalPage,
    result: result.products,
  };

  return NextResponse.json(response);
};
