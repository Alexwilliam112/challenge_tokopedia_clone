"use server";
import { cookies } from "next/headers";

export async function handleLogout() {
  cookies().delete("token");
  cookies().delete("username");
  return { success: true };
}
