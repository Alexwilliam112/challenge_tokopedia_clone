import { Db, ObjectId } from "mongodb";
import { getMongoClientInstance } from "../config";
import { hashText } from "../utils/hash";

export type UserModel = {
  _id: ObjectId;
  username: string;
  email: string;
  password: string;
  name?: string;
};

export type UserModelCreateInput = Omit<UserModel, "_id">;
const DATABASE_NAME = process.env.MONGODB_DB_NAME;
const COLLECTION_USER = "User";

const getDb = async () => {
  const client = await getMongoClientInstance();
  const db: Db = client.db(DATABASE_NAME);

  return db;
};

export const createUser = async (user: UserModelCreateInput) => {
  const modifiedUser: UserModelCreateInput = {
    ...user,
    password: hashText(user.password),
  };

  const db = await getDb();
  const result = await db.collection(COLLECTION_USER).insertOne(modifiedUser);

  return result;
};

export const getUserByEmail = async (email: string) => {
  const db = await getDb();
  const user = (await db
    .collection(COLLECTION_USER)
    .findOne({ email: email })) as UserModel;

  return user;
};

export const getUserbyUsername = async (username: string) => {
  const db = await getDb();
  const user = (await db.collection(COLLECTION_USER).findOne({
    username: username,
  })) as UserModel;

  return user;
};
