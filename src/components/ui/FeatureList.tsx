"use client";

import React, { useState } from "react";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/utils/cn";

interface FeatureListProps {
  features: string[];
  initialCount?: number;
  className?: string;
}

export const FeatureList: React.FC<FeatureListProps> = ({
  features,
  initialCount = 6,
  className,
}) => {
  const [expanded, setExpanded] = useState(false);
  const hasMore = features.length > initialCount;
  const displayedFeatures = expanded ? features : features.slice(0, initialCount);

  return (
    <div className={cn("space-y-2.5", className)}>
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300">
          Key Features ({features.length})
        </h4>
        {hasMore && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
            className="text-[11px] font-mono font-medium text-violet-400 hover:text-white flex items-center gap-1 transition-colors duration-200"
          >
            <span>{expanded ? "Show Less" : `+${features.length - initialCount} More`}</span>
            {expanded ? (
              <ChevronUp className="w-3 h-3" />
            ) : (
              <ChevronDown className="w-3 h-3" />
            )}
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
        {displayedFeatures.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-center gap-1.5 text-xs text-zinc-300 font-normal leading-tight"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span className="truncate">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
