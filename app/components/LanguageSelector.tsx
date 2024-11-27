'use client'

import { useState } from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useTranslation } from '@/hooks/useTranslation'

type Language = "en" | "my"

const languages = [
  { label: "English", value: "en" as Language },
  { label: "Burmese", value: "my" as Language },
] as const

export default function LanguageSelector() {
  const [open, setOpen] = useState(false)
  const { lang, setLang } = useTranslation()

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[140px] justify-between"
        >
          {languages.find((language) => language.value === lang)?.label || "Select language..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[140px] p-0">
        <Command>
          <CommandGroup>
            {languages.map((language) => (
              <CommandItem
                key={language.value}
                value={language.value}
                onSelect={(value) => {
                  setLang(value as Language)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    lang === language.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {language.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
