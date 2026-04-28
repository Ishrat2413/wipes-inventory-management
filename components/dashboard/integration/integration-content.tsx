"use client";

import { Plus } from "lucide-react";
import Link from "next/link";

const TITLE = "Connect Apps With Your Dashboard";
const SUBTITLE = "Complete these simple steps to get your studio up and running";

// Added 'href' property to each step configuration
const STEPS = [
  {
    id: 1,
    title: "Connect to Facebook & Instagram",
    description: "Take the first step to get hired and viewed by companies",
    href: "/dashboard/integration/facebook",
  },
  {
    id: 2,
    title: "Connect to TikTok",
    description: "Take the first step to get hired and viewed by companies",
    href: "/dashboard/integration/tiktok",
  },
  {
    id: 3,
    title: "Connect to Google Ad",
    description: "Take the first step to get hired and viewed by companies",
    href: "/dashboard/integration/google",
  },
  {
    id: 4,
    title: "Connect to Amazon",
    description: "Take the first step to get hired and viewed by companies",
    href: "/dashboard/integration/amazon",
  },
];

export default function IntegrationContent() {
  return (
    <section className="min-h-screen bg-white px-4">
      <div className="mx-auto mt-20 w-full px-2 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-1 text-2xl font-medium text-gray-900">{TITLE}</h1>
          <p className="text-extralight text-sm text-[#A1A1AA]">{SUBTITLE}</p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-2">
          {STEPS.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center justify-between gap-4 py-4 sm:flex-row sm:gap-0"
            >
              {/* Left: Number + Text */}
              <div className="flex w-full items-center gap-4 sm:w-auto">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F5F5F4] text-base font-medium text-[#262626]">
                  {step.id}
                </div>
                <div>
                  <p className="text-base font-medium text-[#52525B] sm:font-normal">
                    {step.title}
                  </p>
                  <p className="mt-0.5 text-xs text-[#A1A1AA]">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Right: Connect Link */}
              <Link
                href={step.href}
                className="flex w-full items-center justify-center gap-1.5 rounded-md border border-[#E5E7EB] bg-[#FAFAF9] px-4 py-2 text-sm text-[#262626] transition-colors hover:bg-gray-100 sm:w-auto sm:shrink-0"
              >
                <Plus size={16} />
                Connect
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}