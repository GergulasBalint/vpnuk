import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Navigation/ui/card'
import { Button } from '@/components/Navigation/ui/button'
import { Textarea } from '@/components/Navigation/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/Navigation/ui/avatar'
import { useComments } from '@/hooks/useComments'
import { formatDistanceToNow } from 'date-fns'

interface CommentSectionProps {
  vpnId: string
}

export function CommentSection({ vpnId }: CommentSectionProps) {
  const { 
    comments, 
    isLoading, 
    addComment, 
    currentUser 
  } = useComments(vpnId)
  
  const [newComment, setNewComment] = React.useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return
    
    addComment(newComment)
    setNewComment('')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Comments</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {currentUser && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Textarea
              placeholder="Share your experience..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <Button type="submit">Post Comment</Button>
          </form>
        )}

        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="flex gap-4">
              <Avatar>
                <AvatarImage src={comment.user.avatar} />
                <AvatarFallback>
                  {comment.user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium">{comment.user.name}</p>
                  <span className="text-sm text-muted-foreground">
                    {formatDistanceToNow(comment.createdAt)} ago
                  </span>
                </div>
                <p className="mt-1">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 