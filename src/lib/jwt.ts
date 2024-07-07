import jwt from "jsonwebtoken";
import * as jose from "jose";

type Payload = {
  id: string
  email: string
  username: string
}

const SECRET_KEY = process.env.JWT_SECRET || "kuncirahasia1";

// export const createToken = (payload: object):string => jwt.sign(payload, SECRET_KEY);
// export const readPayload = (token: string):Payload => jwt.verify(token, SECRET_KEY) as Payload;

export const createToken = async (payload: Payload): Promise<string> => {
  try {
    const secretKey = new TextEncoder().encode(SECRET_KEY);
    return await new jose.SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("2h")
      .sign(secretKey);
  } catch (error) {
    console.error("Error creating token:", error);
    throw new Error("Token creation failed");
  }
};

export const readPayload = async (token: string): Promise<Payload> => {
  try {
    const secretKey = new TextEncoder().encode(SECRET_KEY);
    const { payload } = await jose.jwtVerify(token, secretKey);
    return payload as Payload;
  } catch (error) {
    console.error("Error verifying token:", error);
    throw new Error("Token verification failed");
  }
};