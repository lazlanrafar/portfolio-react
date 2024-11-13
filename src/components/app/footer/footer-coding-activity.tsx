import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/atoms/tooltip";
import { wakatimeWeeklyCodingActivity } from "@/lib/wakatime";
import { Clock } from "lucide-react";
import Link from "next/link";

export default async function FooterCodingActivity() {
  const { data } = await wakatimeWeeklyCodingActivity();
  const todayData = data ? data[data.length - 1] : null;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/activity"
            className="items-center gap-x-1 px-2 py-1 md:flex hidden text-muted-foreground"
          >
            <Clock size={13} className="text-base" />
            <p>{todayData?.grand_total.text}</p>
          </Link>
        </TooltipTrigger>
        <TooltipContent className="!border-none">
          <p>Today coding activity</p>
          <p className="text-sm text-muted-foreground">click for more</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
