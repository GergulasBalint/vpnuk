import React from 'react'
import { Card } from '@/components/Navigation/ui/card'
import { Shield, Zap, Lock, Globe, Server, HeartHandshake } from 'lucide-react'

const TESTING_CRITERIA = [
  {
    icon: Shield,
    title: 'Security Testing',
    description: 'We conduct thorough security audits including DNS leak tests, WebRTC leak tests, and encryption verification.',
    tests: [
      'DNS leak testing',
      'IP leak verification',
      'Encryption standards check',
      'Kill switch effectiveness'
    ]
  },
  {
    icon: Zap,
    title: 'Speed Testing',
    description: 'Multiple daily speed tests across different server locations using standardized connections.',
    tests: [
      'Download speed measurement',
      'Upload speed verification',
      'Latency testing',
      'Server switching speed'
    ]
  },
  {
    icon: Globe,
    title: 'Server Network',
    description: 'Comprehensive evaluation of server network size, distribution, and performance.',
    tests: [
      'Server location verification',
      'Network capacity testing',
      'Connection stability checks',
      'Geographic distribution analysis'
    ]
  },
  {
    icon: Lock,
    title: 'Privacy Features',
    description: 'In-depth analysis of privacy features and policy implementation.',
    tests: [
      'Logging policy verification',
      'Jurisdiction assessment',
      'Data handling practices',
      'Privacy feature effectiveness'
    ]
  },
  {
    icon: Server,
    title: 'Performance Testing',
    description: 'Real-world usage scenarios across different activities and platforms.',
    tests: [
      'Streaming compatibility',
      'P2P performance',
      'Gaming latency',
      'Multi-device usage'
    ]
  },
  {
    icon: HeartHandshake,
    title: 'Customer Experience',
    description: 'Evaluation of customer support, ease of use, and overall service quality.',
    tests: [
      'Support response time',
      'Interface usability',
      'Setup process',
      'Documentation quality'
    ]
  }
]

export function TestingProcess() {
  return (
    <div className="space-y-8">
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground">
          Our VPN testing methodology is designed to provide accurate, comprehensive, and unbiased evaluations through rigorous testing procedures and real-world usage scenarios.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {TESTING_CRITERIA.map((criteria) => (
          <Card key={criteria.title} className="p-6">
            <div className="flex items-start gap-4">
              <criteria.icon className="h-6 w-6 text-primary" />
              <div className="space-y-2">
                <h3 className="font-semibold">{criteria.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {criteria.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {criteria.tests.map((test) => (
                    <li key={test} className="text-sm flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {test}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
} 