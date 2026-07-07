"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/#menu", label: "The Menu" },
  { href: "/about", label: "The Chef" },
  { href: "/#trending", label: "What's Cooking?" },
  { href: "/#poll", label: "Vote" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b-2 border-deep-plum">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="group relative flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-heading font-bold text-deep-plum tracking-tight">
              Id Eat That
            </span>
            <span className="hidden sm:inline text-xs font-handwritten text-primary rotate-[-6deg] translate-y-[-4px]">
              psych blog
            </span>

            {/* Hover tooltip explaining the name */}
            <span className="absolute -bottom-12 left-0 w-64 bg-deep-plum text-cream text-xs p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 font-body">
              &quot;Id&quot; = Freud&apos;s term for your raw, instinctual
              desires. Id eat that = unapologetically curious.
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-deep-plum hover:text-primary transition-colors relative group/link"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-golden group-hover/link:w-full transition-all" />
              </Link>
            ))}
            <Link
              href="/#newsletter"
              className="bg-golden text-deep-plum text-sm font-bold px-5 py-2 rounded-full hover:bg-coral transition-colors"
            >
              Subscribe
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-deep-plum"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-deep-plum"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-deep-plum"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t-2 border-deep-plum bg-cream"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-heading font-semibold text-deep-plum hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#newsletter"
                onClick={() => setMobileOpen(false)}
                className="bg-golden text-deep-plum text-center font-bold px-5 py-3 rounded-full"
              >
                Subscribe
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
