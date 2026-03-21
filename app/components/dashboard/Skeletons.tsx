"use client";

import React from "react";

export function SkeletonLine({ w = "w-full" }: { w?: string }) {
  return <div className={`h-3 rounded bg-white/5 ${w} animate-pulse`} />;
}

export function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <SkeletonLine w="w-1/2" />
      <div className="mt-4 space-y-2">
        <SkeletonLine w="w-3/4" />
        <SkeletonLine w="w-2/3" />
      </div>
    </div>
  );
}

export function SkeletonTable() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
      <div className="p-4 border-b border-white/10">
        <SkeletonLine w="w-40" />
      </div>
      <div className="p-4 space-y-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="grid grid-cols-3 gap-3">
            <SkeletonLine w="w-full" />
            <SkeletonLine w="w-full" />
            <SkeletonLine w="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

