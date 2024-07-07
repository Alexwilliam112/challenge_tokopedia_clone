import { NextRequest, NextResponse } from "next/server";
import {
  createWishlist,
  getWishlist,
  wishlistUniqueVal,
} from "@/db/models/wishlist";
import { readPayload } from "@/lib/jwt";
import { ObjectId } from "mongodb";

interface ParsedCookies {
  [key: string]: string;
}

function parseCookies(cookieString: string): ParsedCookies {
  return cookieString
    .split(";")
    .reduce((acc: ParsedCookies, cookie: string) => {
      const [name, value] = cookie.split("=").map((c) => c.trim());
      acc[name] = value;
      return acc;
    }, {});
}

async function getUserId(token: string) {
  const payload = await readPayload(token);
  return payload.id;
}

export async function GET(request: NextRequest) {
  const cookies = request.headers.get("cookie");
  const parsedCookies = parseCookies(cookies || "");
  const token = parsedCookies.token;
  const wishlists = await getWishlist(await getUserId(token));
  const products = wishlists.map((wishlist) => {
    return wishlist.product
  })

  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  try {
    const cookies = request.headers.get("cookie");
    const parsedCookies = parseCookies(cookies || "");
    const token = parsedCookies.token;
    const userId = await getUserId(token);
    const productId = await request.json();

    const wishlistInput = {
      userId: new ObjectId(userId),
      productId: new ObjectId(productId),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const existingWishlist = await wishlistUniqueVal(userId, productId);
    if (existingWishlist) {
      throw 400;
    }

    await createWishlist(wishlistInput);
    return NextResponse.json({
      statusCode: 201
    });
  } catch (error) {
    if (error === 400) {
      return NextResponse.json({
        statusCode: 400,
      });
    }

    return NextResponse.json({
      error: 500,
    });
  }
}
