'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import HeaderWithoutNav from '../mcomponents/header'

export default function CreateProfile() {
  const [step, setStep] = useState(1)
  const [profile, setProfile] = useState({
    name: '',
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

  const totalSteps = 5
  const progress = (step / totalSteps) * 100

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile(prev => ({ ...prev, [name]: value }))
  }

  const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps))
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1))

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
                  placeholder="e.g., Computer Science"
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
          <Button onClick={step === totalSteps ? () => console.log('Submit', profile) : nextStep}>
            {step === totalSteps ? 'Submit' : 'Next'} {step !== totalSteps && <ChevronRight className="ml-2 h-4 w-4" />}
          </Button>
        </CardFooter>
      </Card>
    </div>
    </>
  )
}

