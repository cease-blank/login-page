"use server";

import { prisma } from "@/lib/prisma";

export async function createUser(formData: FormData) {
  const email = formData.get("email") as string;
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const country = formData.get("country") as string;

  if (!email || !username || !password) {
    return { error: "All fields are required" };
  }

  const existing = await prisma.user.findFirst({
    where: { OR: [{ email }, { username }] },
  });

  if (existing) {
    return { error: "Email or username already taken" };
  }

  const user = await prisma.user.create({
    data: {
      email,
      username,
      password, 
      country,
    },
  });

  return { success: true, userId: user.id };
}