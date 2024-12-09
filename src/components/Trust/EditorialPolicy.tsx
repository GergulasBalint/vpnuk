import React from 'react'
import { Card } from '@/components/Navigation/ui/card'
import { Check } from 'lucide-react'

const POLICY_POINTS = [
  {
    title: 'Independence',
    description: 'Our reviews and recommendations are entirely independent. We never accept payment for positive reviews or rankings.'
  },
  {
    title: 'Testing Standards',
    description: 'Every VPN is tested using the same rigorous methodology to ensure fair and consistent evaluations.'
  },
  {
    title: 'Transparency',
    description: 'We clearly disclose our testing methods, affiliate relationships, and any potential conflicts of interest.'
  },
  {
    title: 'Regular Updates',
    description: 'Reviews are regularly updated to reflect changes in VPN services, features, and performance.'
  },
  {
    title: 'User Privacy',
    description: 'We respect user privacy and only collect necessary data with clear consent and transparency.'
  },
  {
    title: 'Corrections Policy',
    description: 'We promptly correct any factual errors and maintain an update log for significant changes.'
  }
]

export function EditorialPolicy() {
  return (
    <div className="space-y-8">
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground">
          Our editorial policy ensures honest, unbiased, and transparent VPN reviews and recommendations.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {POLICY_POINTS.map((point) => (
          <Card key={point.title} className="p-6">
            <div className="flex items-start gap-4">
              <Check className="h-5 w-5 text-green-500" />
              <div>
                <h3 className="font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {point.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
} 