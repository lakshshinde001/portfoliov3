"use client";
import { useState, useEffect } from "react";
import { Menu, MenuItem } from "../components/ui/navbar-menu";

export default function NavBar() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null; // Prevent hydration mismatch

  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  return (
    <div className={`fixed top-10 inset-x-0 max-w-xl mx-auto z-50 border rounded-full  ${className}`}>
      <Menu>
        <MenuItem item="Home" href="/" />
        <MenuItem item="Services" href="/services" />
        <MenuItem item="Products" href="/products" />
        <MenuItem item="Pricing" href="/pricing" />
      </Menu>
    </div>
  );
}
