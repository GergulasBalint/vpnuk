import React from 'react'
import { VPNSelector } from '@/components/Compare/VPNSelector'
import { VPNComparisonTable } from '@/components/Compare/VPNComparisonTable'
import { Button } from '@/components/Navigation/ui/button'
import { Download } from 'lucide-react'
import { useVPNComparison } from '@/hooks/useVPNComparison'

export default function ComparePage() {
  const { 
    selectedVPNs,
    availableVPNs,
    addVPN,
    removeVPN,
    exportComparison 
  } = useVPNComparison()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Compare VPNs</h1>
        <Button 
          variant="outline" 
          onClick={exportComparison}
          disabled={selectedVPNs.length < 2}
        >
          <Download className="w-4 h-4 mr-2" />
          Export Comparison
        </Button>
      </div>

      <VPNSelector
        selectedVPNs={selectedVPNs}
        availableVPNs={availableVPNs}
        onAdd={addVPN}
        onRemove={removeVPN}
        maxSelections={4}
      />

      {selectedVPNs.length >= 2 ? (
        <VPNComparisonTable vpns={selectedVPNs} />
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          Select at least 2 VPNs to compare
        </div>
      )}
    </div>
  )
} 