"use server";
import { getUserByEmail } from "@/db/models/user";
import { compareTextWithHash } from "@/db/utils/hash";
import { createToken } from "@/lib/jwt";
import { redirect } from "next/navigation";
import { z } from "zod";
import { cookies } from "next/headers";

export const handleLogin = async (formData: FormData) => {
  const loginInputSchema = z.object({
    email: z
      .string({ message: "Email is required" })
      .min(1, "Email is required")
      .email("Invalid email format"),
    password: z
      .string({ message: "Password is required" })
      .min(1, "Password is required"),
  });

  const email = formData.get("email");
  const password = formData.get("password");

  const parsedData = loginInputSchema.safeParse({
    email,
    password,
  });

  if (!parsedData.success) {
    const errPath = parsedData.error.issues[0].path[0];
    const error = parsedData.error.issues[0].message;
    const finalMessage = `${errPath} - ${error}`;
    return redirect(`/login?error=${finalMessage}`);
  }

  const user = await getUserByEmail(parsedData.data.email);
  if (!user || !compareTextWithHash(parsedData.data.password, user.password)) {
    return redirect(`/login?error=Invalid%20credentials`);
  }

  const payload = {
    id: user._id,
    email: user.email,
    username: user.username
  };

  const token = createToken(payload);
  cookies().set("token", token, {
    httpOnly: true,
    secure: false,
    expires: new Date(Date.now() + 1000 * 60 * 60),
    sameSite: "strict",
  });
  cookies().set("username", user.username)

  return redirect(`/`);
};
