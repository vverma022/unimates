import prisma from '@/lib/prisma'; // Import the Prisma client
import { hash } from 'bcrypt';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, password, username } = body;

        // Ensure that the required fields are provided
        if (!email || !password || !username) {
            return new Response(
                JSON.stringify({ error: 'Email, password, and username are required.' }),
                { status: 400 }
            );
        }

        // Check if the email already exists in the database
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return new Response(
                JSON.stringify({ error: 'Email already in use.' }),
                { status: 400 }
            );
        }

        // Hash the password using bcrypt
        const hashedPassword = await hash(password, 10);

        // Create a new user in the database
        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                username,
            },
        });

        // Respond with a success message and the new user details (excluding password)
        return new Response(
            JSON.stringify({
                message: 'User registered successfully.',
                user: { id: newUser.id, email: newUser.email, username: newUser.username },
            }),
            { status: 201 }
        );
    } catch (error: unknown) {
        // Handle any errors that might occur during the user creation process
        if (error instanceof Error) {
            return new Response(
                JSON.stringify({ error: 'Internal server error.', details: error.message }),
                { status: 500 }
            );
        } else {
            return new Response(
                JSON.stringify({ error: 'Internal server error.' }),
                { status: 500 }
            );
        }
    }
}