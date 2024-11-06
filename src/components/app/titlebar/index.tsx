"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/atoms/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu";
import { Icons } from "@/components/atoms/icons";

export default function AppTitlebar() {
  const { setTheme } = useTheme();

  return (
    <div className="absolute left-0 top-0 w-full hidden md:flex items-center justify-between bg-border text-xs border-b z-50 py-2 px-3">
      <div className="flex items-center gap-1">
        <div className="w-3 h-3 rounded-full cursor-pointer bg-red-600"></div>
        <div className="w-3 h-3 rounded-full cursor-pointer bg-yellow-600"></div>
        <div className="w-3 h-3 rounded-full cursor-pointer bg-green-600"></div>
      </div>

      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="rounded-none flex shrink-0">
              <Icons.sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Icons.moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => {
                confirm(
                  "Get ready for a dazzling experience! 🌟 \nAre you absolutely sure you want to switch to the light mode and unleash the flashbang? 💡💥"
                ) && setTheme("light");
              }}
            >
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
