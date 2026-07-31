"use server";

import { prisma } from "@/lib/prisma";

export async function loginOrRegisterUser(email: string, password: string) {
  try {
    // Basic server-side guard
    if (!email || !password) {
      return { success: false, message: "Email and password are required." };
    }

    let user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          username: email.split("@")[0],
          password, // (Note: hash passwords using bcrypt for real production apps)
        },
      });
    }

    return { 
      success: true, 
      message: "Login successful!", 
      redirectTo: "/dashboard" // <-- MODIFY THIS LINK TO WHEREVER YOU WANT TO REDIRECT
    };
  } catch (error) {
    console.error("Prisma Database Error:", error);
    return { 
      success: false, 
      message: "An error occurred while connecting to the database." 
    };
  }
}