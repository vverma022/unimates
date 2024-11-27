"use client"
import { useState, useMemo } from "react"
import Filters from "../mcomponents/filters"
import Post from "../mcomponents/post"

export default function Home() {
  // Define the posts
  const posts = [
    {
      author: "Alice Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      state: "Maharashtra",
      city: "Mumbai",
      major: "Computer Science",
      year: "3",
      content: "Just finished my machine learning project! Anyone else working on ML algorithms?",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com"
    },
    {
      author: "Bob Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      state: "Delhi",
      city: "Delhi",
      major: "Engineering",
      year: "2",
      content: "Looking for study partners for the upcoming physics exam. Any takers?",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com"
    },
    {
      author: "Charlie Brown",
      avatar: "/placeholder.svg?height=40&width=40",
      state: "Karnataka",
      city: "Bangalore",
      major: "Business",
      year: "4",
      content: "Internship opportunity alert! My company is hiring summer interns. DM for details.",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com"
    },
    {
      author: "David Lee",
      avatar: "/placeholder.svg?height=40&width=40",
      state: "Tamil Nadu",
      city: "Chennai",
      major: "Arts",
      year: "1",
      content: "Excited to start college! Anyone else in the arts program?",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com"
    },
    {
      author: "Eva Green",
      avatar: "/placeholder.svg?height=40&width=40",
      state: "Uttar Pradesh",
      city: "Lucknow",
      major: "Engineering",
      year: "2",
      content: "Looking for study partners for the upcoming engineering exams!",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com"
    },
    {
      author: "Frank White",
      avatar: "/placeholder.svg?height=40&width=40",
      state: "Maharashtra",
      city: "Pune",
      major: "Business",
      year: "3",
      content: "Anyone interested in a business internship for the summer?",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com"
    },
    {
      author: "Grace Kelly",
      avatar: "/placeholder.svg?height=40&width=40",
      state: "Delhi",
      city: "New Delhi",
      major: "Computer Science",
      year: "4",
      content: "Just finished my final year project on AI! Who else is in the field?",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com"
    },
    {
      author: "Harry Styles",
      avatar: "/placeholder.svg?height=40&width=40",
      state: "Karnataka",
      city: "Mysore",
      major: "Arts",
      year: "2",
      content: "Looking for a partner for an art project! DM me if interested.",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com"
    }
  ]

  // Define filter state
  const [filters, setFilters] = useState({
    state: "",
    city: "",
    major: "",
    year: "",
  })

  // Filter the posts based on the selected filters
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const stateMatch = filters.state ? post.state.toLowerCase().includes(filters.state.toLowerCase()) : true
      const cityMatch = filters.city ? post.city.toLowerCase().includes(filters.city.toLowerCase()) : true
      const majorMatch = filters.major ? post.major.toLowerCase().includes(filters.major.toLowerCase()) : true
      const yearMatch = filters.year ? post.year === filters.year : true

      return stateMatch && cityMatch && majorMatch && yearMatch
    })
  }, [filters, posts])

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
      <Filters setFilters={setFilters} />
      <div>
        {filteredPosts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
    </>
  )
}