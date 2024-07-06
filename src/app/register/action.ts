"use server";
import {
  createUser,
  getUserByEmail,
  getUserbyUsername,
} from "@/db/models/user";
import { redirect } from "next/navigation";
import { z } from "zod";
import { hashText } from "@/db/utils/hash";

export const handleRegister = async (formData: FormData) => {
  const registerInputSchema = z.object({
    email: z
      .string({ message: "Email is required" })
      .email("Invalid email format")
      .min(1, "Email is required"),
    password: z
      .string({ message: "Password is required" })
      .min(5, "Password minimum character is 5"),
    username: z
      .string({ message: "Username is required" })
      .min(1, "Username is required"),
    name: z.string({ message: "Name is required" }).min(1, "Name is required"),
  });

  const email = formData.get("email");
  const password = formData.get("password");
  const name = formData.get("name");
  const username = formData.get("username");

  const parsedData = registerInputSchema.safeParse({
    email,
    password,
    name,
    username,
  });

  if (!parsedData.success) {
    const errPath = parsedData.error.issues[0].path[0];
    const error = parsedData.error.issues[0].message;
    const finalMessage = `${errPath} - ${error}`;
    return redirect(`/register?error=${finalMessage}`);
  }

  const registeredEmail = await getUserByEmail(parsedData.data.email);
  if (registeredEmail) return redirect("/register?error=Email must be unique");

  const registeredUsername = await getUserbyUsername(parsedData.data.username);
  if (registeredUsername)
    return redirect("/register?error=Username must be unique");

  const payload = {
    email: parsedData.data.email,
    username: parsedData.data.username,
    name: parsedData.data.name,
    password: parsedData.data.password,
  };
  
  await createUser(payload);
  return redirect(`/register?notif=Success create account. Please Log In`);
};
