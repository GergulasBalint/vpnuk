import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Navigation/ui/card'
import { Button } from '@/components/Navigation/ui/button'
import { Progress } from '@/components/Navigation/ui/progress'
import { Download, Upload, Gauge } from 'lucide-react'
import { useSpeedTest } from '@/hooks/useSpeedTest'

export function SpeedTestTool() {
  const { 
    startTest, 
    isRunning, 
    progress, 
    results 
  } = useSpeedTest()

  return (
    <Card>
      <CardHeader>
        <CardTitle>VPN Speed Test</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {!isRunning && !results && (
          <Button 
            onClick={startTest} 
            className="w-full"
          >
            Start Speed Test
          </Button>
        )}

        {isRunning && (
          <div className="space-y-4">
            <Progress value={progress} />
            <p className="text-center text-sm text-muted-foreground">
              Testing your connection speed...
            </p>
          </div>
        )}

        {results && (
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <Download className="h-8 w-8 mx-auto mb-2 text-blue-500" />
              <p className="text-sm text-muted-foreground">Download</p>
              <p className="text-2xl font-bold">{results.download} Mbps</p>
            </div>
            <div className="text-center">
              <Upload className="h-8 w-8 mx-auto mb-2 text-green-500" />
              <p className="text-sm text-muted-foreground">Upload</p>
              <p className="text-2xl font-bold">{results.upload} Mbps</p>
            </div>
            <div className="text-center">
              <Gauge className="h-8 w-8 mx-auto mb-2 text-orange-500" />
              <p className="text-sm text-muted-foreground">Ping</p>
              <p className="text-2xl font-bold">{results.ping} ms</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
} 