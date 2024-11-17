import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {Share2, Instagram, Facebook, Twitter } from 'lucide-react'

interface PostProps {
  author: string
  avatar: string
  major: string
  year: string
  content: string
  instagram: string
  twitter: string
  facebook: string
}

export default function Post({ author, avatar, major, year, content, instagram, twitter, facebook}: PostProps) {
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
      <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" asChild>
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-4 w-4" />
              Instagram
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href={twitter} target="_blank" rel="noopener noreferrer">
              <Twitter className="mr-2 h-4 w-4" />
              Twitter
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <Facebook className="mr-2 h-4 w-4" />
              Facebook
            </a>
          </Button>
        </div>
        <Button variant="ghost" size="sm">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </CardFooter>
    </Card>
  )
}