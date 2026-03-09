"use client"

import { cn } from "@/lib/utils"

interface LanguageToggleProps {
  isEnglish: boolean;
  onToggle: () => void;
  className?: string;
}

export function LanguageToggle({ isEnglish, onToggle, className }: LanguageToggleProps) {
  return (
    <div
      className={cn(
        "flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300",
        "bg-zinc-950 border border-zinc-800",
        className
      )}
      onClick={onToggle}
      role="button"
      tabIndex={0}
    >
      <div className="flex justify-between items-center w-full">
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
            isEnglish 
              ? "transform translate-x-0 bg-zinc-800" 
              : "transform translate-x-8 bg-zinc-800"
          )}
        >
          <span className="text-[10px] font-bold text-white">
            {isEnglish ? "EN" : "FR"}
          </span>
        </div>
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
            "bg-transparent"
          )}
        >
          <span className="text-[10px] font-bold text-gray-500">
            {isEnglish ? "FR" : "EN"}
          </span>
        </div>
      </div>
    </div>
  )
}