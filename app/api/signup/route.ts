import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";


export async function POST(req: Request) {
  const { name, email, password, college } = await req.json();

  // Input validation
  if (!name || !email || !password || !college) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  try {
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user in the database
    const user = await prisma.user.create({
      data: {
        username: name,
        email: email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: "User created successfully", user }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}