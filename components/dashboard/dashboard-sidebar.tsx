"use client";

import { cn } from "@/lib/utils";
import {
  Bell,
  ChevronsLeft,
  CircleDollarSign,
  FileText,
  GalleryVerticalEnd,
  ListTree,
  Network,
  Package,
  Search,
  Settings,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type SidebarItem = {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
};

const operationItems: SidebarItem[] = [
  { label: "Home", value: "home", icon: GalleryVerticalEnd },
  { label: "Products", value: "products", icon: ListTree },
  { label: "Add Product", value: "add-product", icon: FileText },
  { label: "Orders", value: "orders", icon: Package },
  { label: "Subscription", value: "subscription", icon: CircleDollarSign },
  { label: "Customers", value: "customers", icon: Users },
  { label: "Feedback", value: "feedback", icon: Star },
];

const otherItems: SidebarItem[] = [
  { label: "Integration", value: "integration", icon: Network },
  { label: "Settings", value: "settings", icon: Settings },
];

function SidebarNavItem({
  item,
  isActive,
}: {
  item: SidebarItem;
  isActive: boolean;
}) {
  const Icon = item.icon;

  return (
    <Link
      href={`/dashboard?view=${item.value}`}
      className={cn(
        "flex items-center gap-2 rounded-md px-2 py-1.5 text-lg text-[#262626] transition-colors",
        isActive ? "bg-[#e8e8e8]" : "hover:bg-[#ededed]",
      )}>
      <Icon className='h-4 w-4 shrink-0 text-[#2b2b2b]' />
      <span>{item.label}</span>
    </Link>
  );
}

export default function DashboardSidebar() {
  const searchParams = useSearchParams();
  const activeView = searchParams.get("view") ?? "products";

  return (
    <aside className='w-full shrink-0 border-r border-black/10 bg-[#f5f5f5] md:max-w-80 md:min-h-screen p-3'>
      <div className='flex items-center justify-between px-1 pb-3'>
        <Link href='/' aria-label='ZilkyWipes home'>
                <Image
                  src='/Logo/Logo-02.svg'
                  alt='ZilkyWipes'
                  width={190}
                  height={52}
                  priority
                  className='h-8 md:h-9 lg:h-10 w-auto object-contain'
                />
              </Link>
        <button
          type='button'
          aria-label='Collapse sidebar'
          className='rounded p-1 text-[#a0a0a0] hover:bg-[#ececec]'>
          <ChevronsLeft className='h-4 w-4' />
        </button>
      </div>

      <div className='relative'>
        <Search className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9e9e9e]' />
        <input
          type='text'
          placeholder='Search Anything...'
          className='h-9 w-full rounded-lg border border-[#dddddd] bg-[#f8f8f8] pl-9 pr-3 text-[14px] outline-none placeholder:text-[#b3b3b3] focus:border-[#cfcfcf]'
        />
      </div>

      <div className='mt-3 flex items-center justify-between rounded-md px-1.5 py-1.5'>
        <div className='flex items-center gap-2 text-[#2f2f2f]'>
          <Bell className='h-4 w-4' />
          <span className='text-lg'>Notification</span>
        </div>
        <span className='inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#d9ebff] px-1 text-[10px] text-[#3a86e8]'>
          1
        </span>
      </div>

      <div className='mt-4'>
        <p className='px-1 text-[18px] tracking-[0.08em] text-[#9d9d9d]'>Operation</p>
        <div className='mt-2 flex flex-col gap-0.5'>
          {operationItems.map((item) => (
            <SidebarNavItem
              key={item.value}
              item={item}
              isActive={activeView === item.value}
            />
          ))}
        </div>
      </div>

      <div className='mt-5'>
        <p className='px-1 text-[18px] tracking-[0.08em] text-[#9d9d9d]'>Others</p>
        <div className='mt-2 flex flex-col gap-0.5'>
          {otherItems.map((item) => (
            <SidebarNavItem
              key={item.value}
              item={item}
              isActive={activeView === item.value}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
