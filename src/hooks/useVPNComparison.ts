import { useState, useEffect } from 'react'
import { jsPDF } from 'jspdf'
import 'jspdf-autotable'

export function useVPNComparison() {
  const [selectedVPNs, setSelectedVPNs] = useState<VPN[]>([])
  const [availableVPNs, setAvailableVPNs] = useState<VPN[]>([])

  useEffect(() => {
    fetchVPNs()
  }, [])

  const fetchVPNs = async () => {
    try {
      const response = await fetch('/api/vpns')
      const data = await response.json()
      setAvailableVPNs(data)
    } catch (error) {
      console.error('Error fetching VPNs:', error)
    }
  }

  const addVPN = (vpn: VPN) => {
    setSelectedVPNs(prev => [...prev, vpn])
  }

  const removeVPN = (vpnId: string) => {
    setSelectedVPNs(prev => prev.filter(vpn => vpn.id !== vpnId))
  }

  const exportComparison = () => {
    const doc = new jsPDF()
    
    // Add title
    doc.setFontSize(20)
    doc.text('VPN Comparison', 14, 22)

    // Generate comparison table
    const tableData = generatePDFData(selectedVPNs)
    
    doc.autoTable({
      head: [['Feature', ...selectedVPNs.map(vpn => vpn.name)]],
      body: tableData,
      startY: 30,
      styles: { fontSize: 10 },
      headStyles: { fillColor: [41, 128, 185] },
    })

    // Save the PDF
    doc.save('vpn-comparison.pdf')
  }

  return {
    selectedVPNs,
    availableVPNs,
    addVPN,
    removeVPN,
    exportComparison
  }
}

function generatePDFData(vpns: VPN[]) {
  const features = [
    { key: 'monthly', label: 'Monthly Price', format: (v: number) => `$${v.toFixed(2)}` },
    { key: 'servers', label: 'Server Count', format: (v: number) => v.toLocaleString() },
    { key: 'countries', label: 'Countries' },
    { key: 'simultaneousConnections', label: 'Simultaneous Connections' },
    { key: 'download', label: 'Download Speed (Mbps)' },
    { key: 'upload', label: 'Upload Speed (Mbps)' },
    { key: 'ping', label: 'Ping (ms)' },
    { key: 'killSwitch', label: 'Kill Switch', format: (v: boolean) => v ? '✓' : '✗' },
    { key: 'noLogs', label: 'No-Logs Policy', format: (v: boolean) => v ? '✓' : '✗' },
    { key: 'p2p', label: 'P2P Support', format: (v: boolean) => v ? '✓' : '✗' },
  ]

  return features.map(feature => [
    feature.label,
    ...vpns.map(vpn => {
      const value = getNestedValue(vpn, feature.key)
      return feature.format ? feature.format(value) : value
    })
  ])
}

function getNestedValue(obj: any, path: string) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj)
} 