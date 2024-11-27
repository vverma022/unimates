'use client'

import { getSession } from "next-auth/react"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import HeaderWithoutNav from '../mcomponents/header'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import axios from 'axios'
import { CheckCircle as CheckCircleIcon } from 'lucide-react'

export default function CreateProfile() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1)
  const [profile, setProfile] = useState({
    name: '',
    gender: '',
    description: '',  // Added description field
    enrollmentYear: '',
    graduationYear: '',
    course: '',
    major: '',
    country: '',
    state: '',
    city: '',
    instagram: '',
    twitter: '',
    facebook: '',
    photoLink: '',
  })

  const totalSteps = 6  // Updated total steps to include the description step
  const progress = (step / totalSteps) * 100

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile(prev => ({ ...prev, [name]: value }))
  }

  const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps))
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1))

  const handleSubmit = async () => {
    console.log('Submitting profile:', profile);
    setLoading(true);
  
    try {
      // Get the userId from sessionStorage (or wherever you're storing it)
      const userId = sessionStorage.getItem("userId");
  
      if (!userId) {
        alert('No user ID found. Please sign in again.');
        return;
      }
  
      // Add the userId to the profile object
      const profileWithUserId = { ...profile, userId };
  
      // Send the profile data along with the userId in the request
      const response = await axios.post('/api/create-profile', profileWithUserId);
  
      if (response.status === 200) {
        setIsDialogOpen(true);
  
        // Optional: Close dialog after 2 seconds
        setTimeout(() => {
          setIsDialogOpen(false);
        }, 2000);
      } else {
        console.error('Error:', response.data?.error || 'Unexpected error');
      }
    } catch (error: any) {
      console.error('Error creating profile:', error);
      alert(error.response?.data?.error || 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <HeaderWithoutNav/>
      <div className="flex container mx-auto p-4 items-center justify-center h-screen">
        <Card className="w-full max-w-2xl mx-auto ">
          <CardHeader>
            <CardTitle>Create Your Profile</CardTitle>
            <CardDescription>Step {step} of {totalSteps}</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={progress} className="mb-4" />
            {step === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    value={profile.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select value={profile.gender} onValueChange={value => setProfile(prev => ({ ...prev, gender: value }))}>
                    <SelectTrigger id="gender" name="gender">
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    name="description"
                    placeholder="Tell us about yourself"
                    value={profile.description}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="enrollmentYear">Enrollment Year</Label>
                    <Input
                      id="enrollmentYear"
                      name="enrollmentYear"
                      type="number"
                      placeholder="2020"
                      value={profile.enrollmentYear}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="graduationYear">Graduation Year</Label>
                    <Input
                      id="graduationYear"
                      name="graduationYear"
                      type="number"
                      placeholder="2024"
                      value={profile.graduationYear}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="course">Course</Label>
                  <Input
                    id="course"
                    name="course"
                    placeholder="e.g., BTech"
                    value={profile.course}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="major">Major</Label>
                  <Input
                    id="major"
                    name="major"
                    placeholder="e.g., Software Engineering"
                    value={profile.major}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    name="country"
                    placeholder="Your country"
                    value={profile.country}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    name="state"
                    placeholder="Your state"
                    value={profile.state}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    placeholder="Your city"
                    value={profile.city}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            )}
            {step === 4 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="instagram">Instagram</Label>
                  <Input
                    id="instagram"
                    name="instagram"
                    placeholder="Your Instagram profile link"
                    value={profile.instagram}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="twitter">Twitter</Label>
                  <Input
                    id="twitter"
                    name="twitter"
                    placeholder="Your Twitter profile link"
                    value={profile.twitter}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="facebook">Facebook</Label>
                  <Input
                    id="facebook"
                    name="facebook"
                    placeholder="Your Facebook profile link"
                    value={profile.facebook}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            )}
            {step === 5 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="photoLink">Photo Link</Label>
                  <Input
                    id="photoLink"
                    name="photoLink"
                    placeholder="Link to your profile photo"
                    value={profile.photoLink}
                    type="file"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={prevStep} disabled={step === 1} variant="outline">
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            <Button onClick={step === totalSteps ? handleSubmit : nextStep}>
              {step === totalSteps ? 'Submit' : 'Next'} {step !== totalSteps && <ChevronRight className="ml-2 h-4 w-4" />}
            </Button>
          </CardFooter>
        </Card>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogTitle>Account Created Successfully!</DialogTitle>
          <DialogDescription className="flex items-center space-x-2">
            <CheckCircleIcon className="h-6 w-6 text-green-500 animate-pulse" />
            <span className="text-green-600">Your account has been created successfully!</span>
          </DialogDescription>
        </DialogContent>
      </Dialog>
      </div>
    </>
  )
}