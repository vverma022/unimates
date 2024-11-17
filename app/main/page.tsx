import Filters from "../mcomponents/filters"
import Post from "../mcomponents/post"

export default function Home() {
  const posts = [
    {
      author: "Alice Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
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
      major: "Business",
      year: "4",
      content: "Internship opportunity alert! My company is hiring summer interns. DM for details.",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com"
    }
  ]

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
      <Filters />
      <div>
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
    </>
  )
}