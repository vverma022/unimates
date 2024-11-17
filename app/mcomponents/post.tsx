import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Share2 } from 'lucide-react'

interface PostProps {
  author: string
  avatar: string
  major: string
  year: string
  content: string
  likes: number
  comments: number
}

export default function Post({ author, avatar, major, year, content, likes, comments }: PostProps) {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={avatar} alt={author} />
          <AvatarFallback>{author.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-semibold">{author}</h3>
          <p className="text-sm text-muted-foreground">{major}, Year {year}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="sm">
          <Heart className="mr-2 h-4 w-4" />
          {likes}
        </Button>
        <Button variant="ghost" size="sm">
          <MessageCircle className="mr-2 h-4 w-4" />
          {comments}
        </Button>
        <Button variant="ghost" size="sm">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </CardFooter>
    </Card>
  )
}