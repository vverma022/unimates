import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming JSON body
    const {
      name,
      gender,
      enrollmentYear,
      graduationYear,
      course,
      major,
      country,
      state,
      city,
      instagram,
      twitter,
      facebook,
      description,
    } = await req.json()

    // Check if the profile already exists for this userI
    // Create the profile with the userId from the request
    const newProfile = await prisma.profile.create({
      data: {
        name,
        gender,
        enrollmentYear,
        graduationYear,
        course,
        major,
        country,
        state,
        city,
        instagram,
        twitter,
        facebook,
        description, // Use userId as provided by frontend
      },
    })
   console.log('newProfile', newProfile)
    // Return success response
    return NextResponse.json({ message: 'Profile created successfully', profile: newProfile }, { status: 200 })
  } catch (error) {
    console.error('Error creating profile:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}