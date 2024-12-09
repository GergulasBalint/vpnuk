import React from 'react'
import { Card, CardContent } from '@/components/Navigation/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/Navigation/ui/tabs'
import { TestingProcess } from '@/components/Trust/TestingProcess'
import { TestingLab } from '@/components/Trust/TestingLab'
import { EditorialPolicy } from '@/components/Trust/EditorialPolicy'
import { ExpertTeam } from '@/components/Trust/ExpertTeam'

export default function MethodologyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Our Testing Methodology</h1>
        
        <Tabs defaultValue="process" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="process">Process</TabsTrigger>
            <TabsTrigger value="lab">Testing Lab</TabsTrigger>
            <TabsTrigger value="team">Our Team</TabsTrigger>
            <TabsTrigger value="policy">Editorial Policy</TabsTrigger>
          </TabsList>

          <TabsContent value="process">
            <TestingProcess />
          </TabsContent>

          <TabsContent value="lab">
            <TestingLab />
          </TabsContent>

          <TabsContent value="team">
            <ExpertTeam />
          </TabsContent>

          <TabsContent value="policy">
            <EditorialPolicy />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 