import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";
import { ProductModel } from "./products";

export type WishlistProduct = {
  _id?: ObjectId;
  userId: ObjectId;
  productId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

export type WishlistGET = {
  _id?: ObjectId;
  userId: ObjectId;
  productId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
  product: ProductModel
}

export type CreateWishlistInput = Omit<WishlistProduct, "_id">;
const DATABASE_NAME = process.env.MONGODB_DB_NAME;
const COLLECTION_NAME = "Wishlist";

const getDb = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);

  return db;
};

export const getWishlist = async (userId: string): Promise<WishlistGET[]> => {
  const db = await getDb();
  const wishlist = await db.collection(COLLECTION_NAME).find({ userId: new ObjectId(userId) }).toArray();

  const productIds = wishlist.map(item => item.productId);
  const products = await db.collection("Products").find({ _id: { $in: productIds } }).toArray();

  const wishlistWithProducts = wishlist.map(item => ({
    ...item,
    product: products.find(product => product._id.equals(item.productId))
  }));

  return wishlistWithProducts as WishlistGET[];
};

export const wishlistUniqueVal = async(userId: string, productId: string): Promise<WishlistProduct> => {
  const db = await getDb()
  const wishlistFound = await db.collection(COLLECTION_NAME).findOne({
    userId: new ObjectId(userId),
    productId: new ObjectId(productId)
  })

  return wishlistFound as WishlistProduct
}

export const createWishlist = async (wishlistInput: CreateWishlistInput):Promise<void> => {
  const db = await getDb();
  await db.collection(COLLECTION_NAME).insertOne(wishlistInput);
  return;
};

export const removeWishlist = async (productId: string, userId: string):Promise<void> => {
  const db = await getDb();
  const productId_object = new ObjectId(productId);
  const userId_object = new ObjectId(userId)
  await db.collection(COLLECTION_NAME).deleteOne({
    productId: productId_object,
    userId: userId_object
  });
  return;
};
