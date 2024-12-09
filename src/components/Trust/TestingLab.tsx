import React from 'react'
import { Card } from '@/components/Navigation/ui/card'
import Image from 'next/image'

export function TestingLab() {
  return (
    <div className="space-y-8">
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground">
          Our dedicated testing facility ensures consistent and reliable VPN performance evaluation using standardized equipment and controlled environments.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card className="p-6 space-y-4">
          <h3 className="text-lg font-semibold">Testing Environment</h3>
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <Image
              src="/images/testing-lab.jpg"
              alt="VPN Testing Lab"
              fill
              className="object-cover"
            />
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Temperature-controlled environment</li>
            <li>• Standardized network configurations</li>
            <li>• Multiple testing stations</li>
            <li>• Dedicated fiber connections</li>
          </ul>
        </Card>

        <Card className="p-6 space-y-4">
          <h3 className="text-lg font-semibold">Testing Equipment</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">Network Infrastructure</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Enterprise-grade routers and switches</li>
                <li>• 1Gbps symmetric fiber connection</li>
                <li>• Multiple ISP connections</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Testing Devices</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Windows, Mac, and Linux workstations</li>
                <li>• Mobile devices (iOS & Android)</li>
                <li>• Smart TVs and streaming devices</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Monitoring Tools</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Network analysis software</li>
                <li>• Performance monitoring tools</li>
                <li>• Security testing suites</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
} 