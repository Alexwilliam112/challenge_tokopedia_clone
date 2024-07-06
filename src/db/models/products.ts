import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";

export type ProductModel = {
  _id: ObjectId;
  name: string;
  slug: string;
  description?: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
};

const DATABASE_NAME = process.env.MONGODB_DB_NAME;
const COLLECTION_NAME = "Products";

const getDb = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);

  return db;
};

export const searchProducts = async (
  searchParam: string
): Promise<{ products: ProductModel[], totalPage: number }> => {
  const db = await getDb();
  const regex = new RegExp(searchParam, "i");

  const totalDocuments = await db
    .collection(COLLECTION_NAME)
    .countDocuments({
      $or: [{ name: { $regex: regex } }, { slug: { $regex: regex } }],
    });

  const totalPage = 1;

  const products = await db
    .collection(COLLECTION_NAME)
    .find({
      $or: [{ name: { $regex: regex } }, { slug: { $regex: regex } }],
    })
    .toArray();

  return { products: products as ProductModel[], totalPage };
};


export const getProducts = async (
  limit: number | null = null
): Promise<ProductModel[]> => {
  const db = await getDb();
  let query = db.collection(COLLECTION_NAME).find();

  if (limit !== null && limit !== undefined) {
    query = query.limit(limit);
  }

  const products = await query.toArray();
  return products as ProductModel[];
};

export const getProductBySlug = async (slug: string): Promise<ProductModel> => {
  const db = await getDb();
  const productFound = await db.collection(COLLECTION_NAME).findOne({
    slug,
  });
  return productFound as ProductModel;
};
