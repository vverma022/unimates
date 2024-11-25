'use server'

import { z } from 'zod'

const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  enrollmentYear: z.string().regex(/^\d{4}$/, "Must be a valid year"),
  graduationYear: z.string().regex(/^\d{4}$/, "Must be a valid year"),
  course: z.string().min(2, "Course must be at least 2 characters"),
  major: z.string().min(2, "Major must be at least 2 characters"),
  country: z.string().min(2, "Country must be at least 2 characters"),
  state: z.string().min(2, "State must be at least 2 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  instagram: z.string().url("Must be a valid URL").optional().or(z.literal('')),
  twitter: z.string().url("Must be a valid URL").optional().or(z.literal('')),
  facebook: z.string().url("Must be a valid URL").optional().or(z.literal('')),
  photoLink: z.string().url("Must be a valid URL").optional().or(z.literal('')),
})

export async function createProfile(formData: FormData) {
  const validatedFields = profileSchema.safeParse({
    name: formData.get('name'),
    enrollmentYear: formData.get('enrollmentYear'),
    graduationYear: formData.get('graduationYear'),
    course: formData.get('course'),
    major: formData.get('major'),
    country: formData.get('country'),
    state: formData.get('state'),
    city: formData.get('city'),
    instagram: formData.get('instagram'),
    twitter: formData.get('twitter'),
    facebook: formData.get('facebook'),
    photoLink: formData.get('photoLink'),
  })

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors }
  }

  // Here you would typically save the data to your database
  // For this example, we'll just return a success message
  return { success: "Profile created successfully!" }
}

