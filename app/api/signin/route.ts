import prisma from '@/lib/prisma'; // Import the Prisma client
import { compare } from 'bcrypt';
import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' });

    const { email, password, rememberMe } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required.' });
    }

    try {
        // Find the user by email
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return res.status(401).json({ error: 'Invalid email or password.' });

        // Compare the password
        const isPasswordValid = await compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ error: 'Invalid email or password.' });

        // Set a cookie with an expiration based on "Remember Me"
        const maxAge = rememberMe ? 30 * 24 * 60 * 60 : 24 * 60 * 60; // 30 days or 1 day
        const token = { id: user.id, email: user.email }; // Minimal data to store in the session

        res.setHeader(
            'Set-Cookie',
            serialize('auth_token', JSON.stringify(token), {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge,
                path: '/',
            })
        );

        res.status(200).json({ message: 'Logged in successfully.', user: { id: user.id, email: user.email, username: user.username } });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: 'Internal server error.', details: error.message });
        } else {
            res.status(500).json({ error: 'Internal server error.' });
        }
    }
}