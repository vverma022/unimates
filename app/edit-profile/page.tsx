'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Image from 'next/image'
import { Instagram, Facebook, Twitter, MapPin, GraduationCap, Calendar } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea } from '@/components/ui/scroll-area'

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

const formSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  major: z.string().min(1, 'Please select your major'),
  admissionYear: z.string(),
  graduationYear: z.string(),
  introduction: z.string().min(10, 'Introduction must be at least 10 characters').max(500, 'Introduction must not exceed 500 characters'),
  photo: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
  instagram: z.string().optional(),
  facebook: z.string().optional(),
  twitter: z.string().optional(),
  country: z.string().min(1, 'Please select your country'),
  state: z.string().min(1, 'Please enter your state'),
  city: z.string().min(1, 'Please enter your city'),
})

const majors = [
  "BTech",
  "MTech",
  "BBA",
  "MBA",
  "Psychology",
  "Computer Science",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Biology",
  "Chemistry",
  "Physics",
  "Mathematics",
  "Economics",
  "Political Science",
  "Sociology",
  "English Literature",
  "History",
  "Philosophy",
  "Fine Arts",
  "Other"
]

export default function Component() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      major: '',
      admissionYear: '',
      graduationYear: '',
      introduction: '',
      instagram: '',
      facebook: '',
      twitter: '',
      country: '',
      state: '',
      city: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="flex items-center justify-center h-20 bg-card flex-col space-x-3">
        <h1 className="text-2xl font-bold">Your Unimates Profile</h1>
        <p>This is your Unimates profile for others to see and connect</p>
      </header>
      <main className="flex-grow flex overflow-hidden">
        <ScrollArea className="flex-grow p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@university.edu" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="major"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Major</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <GraduationCap className="mr-2 h-4 w-4" />
                            <SelectValue placeholder="Select your major" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {majors.map((major) => (
                            <SelectItem key={major} value={major}>
                              {major}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="admissionYear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Admission Year</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <Calendar className="mr-2 h-4 w-4" />
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map(
                            (year) => (
                              <SelectItem key={year} value={year.toString()}>
                                {year}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="graduationYear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Graduation Year</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <Calendar className="mr-2 h-4 w-4" />
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map(
                            (year) => (
                              <SelectItem key={year} value={year.toString()}>
                                {year}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Introduce Yourself</h3>
                <FormField
                  control={form.control}
                  name="introduction"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Introduction</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about yourself, your interests, and what you hope to achieve..." 
                          className="resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="photo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Profile Photo</FormLabel>
                      <FormControl>
                        <div className="flex items-center space-x-4">
                          <Input
                            type="file"
                            accept=".jpg,.jpeg,.png,.webp"
                            onChange={(e) => field.onChange(e.target.files)}
                            className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold"
                          />
                          {field.value && field.value[0] && (
                            <Image
                              src={URL.createObjectURL(field.value[0])}
                              alt="Profile preview"
                              width={50}
                              height={50}
                              className="rounded-full object-cover"
                            />
                          )}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Social Media Links</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="instagram"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Instagram</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Instagram className="absolute left-2 top-2.5 h-5 w-5 text-muted-foreground" />
                            <Input className="pl-9" placeholder="username" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="facebook"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Facebook</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Facebook className="absolute left-2 top-2.5 h-5 w-5 text-muted-foreground" />
                            <Input className="pl-9" placeholder="username" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="twitter"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Twitter</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Twitter className="absolute left-2 top-2.5 h-5 w-5 text-muted-foreground" />
                            <Input className="pl-9" placeholder="username" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Location</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MapPin className="absolute left-2 top-2.5 h-5 w-5 text-muted-foreground" />
                            <Input className="pl-9" placeholder="Country" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MapPin className="absolute left-2 top-2.5 h-5 w-5 text-muted-foreground" />
                            <Input className="pl-9" placeholder="State" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MapPin className="absolute left-2 top-2.5 h-5 w-5 text-muted-foreground" />
                            <Input className="pl-9" placeholder="City" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">
                Create Profile
              </Button>
            </form>
          </Form>
        </ScrollArea>
      </main>
    </div>
  )
}