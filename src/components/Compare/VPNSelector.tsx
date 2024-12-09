import React from 'react'
import { Card } from '@/components/Navigation/ui/card'
import { Button } from '@/components/Navigation/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/Navigation/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Navigation/ui/popover'
import { Check, ChevronsUpDown, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface VPNSelectorProps {
  selectedVPNs: VPN[]
  availableVPNs: VPN[]
  onAdd: (vpn: VPN) => void
  onRemove: (vpnId: string) => void
  maxSelections: number
}

interface VPN {
  id: string
  name: string
  logo: string
}

export function VPNSelector({ 
  selectedVPNs, 
  availableVPNs, 
  onAdd, 
  onRemove, 
  maxSelections 
}: VPNSelectorProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        {selectedVPNs.map((vpn) => (
          <Card key={vpn.id} className="flex items-center gap-4 p-4">
            <img 
              src={vpn.logo} 
              alt={vpn.name} 
              className="h-8 w-auto"
            />
            <span className="font-medium">{vpn.name}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onRemove(vpn.id)}
            >
              <X className="h-4 w-4" />
            </Button>
          </Card>
        ))}

        {selectedVPNs.length < maxSelections && (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[200px] justify-between"
              >
                Add VPN
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search VPNs..." />
                <CommandEmpty>No VPN found.</CommandEmpty>
                <CommandGroup>
                  {availableVPNs
                    .filter(vpn => !selectedVPNs.find(s => s.id === vpn.id))
                    .map(vpn => (
                      <CommandItem
                        key={vpn.id}
                        onSelect={() => {
                          onAdd(vpn)
                          setOpen(false)
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            selectedVPNs.find(s => s.id === vpn.id)
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {vpn.name}
                      </CommandItem>
                    ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  )
} 