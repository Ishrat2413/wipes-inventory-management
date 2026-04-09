"use client";

import CartDrawer from "@/components/shared/cart/cart-drawer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/shop" },
  { label: "Subscription", href: "/subscription" },
  { label: "Benefits", href: "/benefits" },
  { label: "About Us", href: "/about" },
  { label: "FAQ", href: "/faq" },
] as const;

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isShopPage = pathname === "/shop";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 w-full transition-colors ${
          scrolled
            ? "border-b border-black/10 bg-white/50 backdrop-blur"
            : "bg-transparent"
        }`}
        style={{ height: "var(--navbar-height)" }}>
        <nav className='h-full px-12.5 pt-8'>
          <div className='flex items-start justify-between'>
            <div className='flex items-center gap-10.75'>
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className='text-lg lg:text-2xl font-medium leading-none text-[#1D3A5F] transition-opacity hover:opacity-80'>
                  {item.label}
                </Link>
              ))}
            </div>

            {isShopPage ? (
              <button
                type='button'
                onClick={() => setIsCartOpen(true)}
                className='text-base lg:text-xl font-medium text-(--text-primary) transition-colors'>
                Cart
              </button>
            ) : (
              <Link
                href='/shop'
                className='text-base lg:text-xl font-medium rounded-full bg-white px-6 py-4 text-[#1D3A5F] transition-opacity hover:opacity-90'>
                Shop ZilkyWipes
              </Link>
            )}
          </div>
        </nav>
      </header>

      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
