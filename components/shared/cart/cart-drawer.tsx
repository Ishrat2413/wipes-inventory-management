"use client";

import { TicketPercent } from "lucide-react";
import { useEffect } from "react";

type CartDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className='fixed inset-0 z-100 backdrop-blur-[6px]'
      style={{ backgroundColor: "var(--cart-overlay-bg)" }}
      onClick={onClose}
      role='presentation'>
      <aside
        className='ml-auto flex h-screen w-full flex-col px-5 py-5 text-white sm:w-[80vw] md:w-[60vw] lg:w-[40vw]'
        style={{ backgroundColor: "var(--cart-panel-bg)" }}
        onClick={(event) => event.stopPropagation()}
        role='dialog'
        aria-modal='true'
        aria-label='Cart drawer'>
        <div className='flex items-start justify-between'>
          <h2 className='font-heading text-5xl font-bold leading-none'>
            Cart List <span className='text-(--cart-muted-text)'>/ 01</span>
          </h2>
          <button
            type='button'
            onClick={onClose}
            className='text-3xl text-white/90 transition-opacity hover:opacity-80'>
            Clear
          </button>
        </div>

        <div className='mt-8 border-t border-white/35 pt-5'>
          <div className='flex items-start justify-between gap-4'>
            <div>
              <p className='text-3xl'>NatureSoft Wipes\u2122</p>
              <div className='mt-3 flex flex-wrap gap-2'>
                <span className='rounded-full border border-white px-2.5 py-0.5 text-sm'>
                  One Time
                </span>
                <span className='rounded-full border border-white px-2.5 py-0.5 text-sm'>
                  - 1 Item +
                </span>
              </div>
            </div>
            <p className='text-3xl'>$15.00</p>
          </div>
        </div>

        <button
          type='button'
          className='mt-6 flex items-center justify-between border-y border-white/35 py-3 text-left text-3xl'>
          <span>Apply a Coupon</span>
          <TicketPercent className='h-5 w-5' />
        </button>

        <div className='mt-auto'>
          <button
            type='button'
            className='h-14 w-full rounded-full bg-white text-xl font-medium text-(--text-primary)'>
            Proceed to Checkout
          </button>
        </div>
      </aside>
    </div>
  );
}
