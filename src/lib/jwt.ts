import jwt from "jsonwebtoken";
import * as jose from "jose";

type Payload = {
  id: string
  email: string
  username: string
}

const SECRET_KEY = process.env.JWT_SECRET || "kuncirahasia1";

export const createToken = (payload: object):string => jwt.sign(payload, SECRET_KEY);
export const readPayload = (token: string):Payload => jwt.verify(token, SECRET_KEY) as Payload;

export const readPayloadJose = async <T>(token: string) => {
  const secretKey = new TextEncoder().encode(SECRET_KEY);
  const payloadJose = await jose.jwtVerify<T>(token, secretKey);
  return payloadJose.payload;
};
