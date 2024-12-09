import React from 'react'
import { Card } from '@/components/Navigation/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/Navigation/ui/avatar'
import { Badge } from '@/components/Navigation/ui/badge'
import { LinkedinIcon, TwitterIcon } from 'lucide-react'

const TEAM_MEMBERS = [
  {
    name: 'Sarah Chen',
    role: 'Lead Security Analyst',
    image: '/team/sarah.jpg',
    bio: '10+ years in cybersecurity, CISSP certified, former security consultant at major tech firms.',
    expertise: ['Network Security', 'Encryption', 'Privacy'],
    social: {
      linkedin: 'https://linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/sarahchen'
    }
  },
  // Add more team members...
]

export function ExpertTeam() {
  return (
    <div className="space-y-8">
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground">
          Our team of VPN experts brings decades of combined experience in cybersecurity, networking, and privacy protection.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {TEAM_MEMBERS.map((member) => (
          <Card key={member.name} className="p-6">
            <div className="flex items-start gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
                <p className="text-sm">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <TwitterIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
} 