"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
  { href: "/#menu", label: "The Menu" },
  { href: "/about", label: "The Chef" },
  { href: "/#trending", label: "What's Cooking?" },
  { href: "/#poll", label: "Weekly Poll" },
];

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
};

export function Footer() {
  return (
    <footer className="bg-deep-plum text-cream">
      {/* Top decorative strip */}
      <div className="h-2 bg-gradient-to-r from-golden via-coral to-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <motion.div {...fadeIn} transition={{ duration: 0.4 }}>
            <h3 className="text-2xl font-heading font-bold mb-2">Id Eat That</h3>
            <p className="text-xs uppercase tracking-wider text-golden font-bold mb-3">
              by Pari Darmora · Class 12 · Vasant Valley School
            </p>
            <p className="text-cream/70 text-sm leading-relaxed max-w-xs">
              Psychology served fresh — no jargon, just flavor. A blog that
              makes your brain hungry for more.
            </p>
            <p className="mt-4 font-handwritten text-golden text-lg rotate-[-2deg]">
              &quot;The id wants what it wants.&quot;
            </p>
          </motion.div>

          {/* Links */}
          <motion.div {...fadeIn} transition={{ duration: 0.4, delay: 0.1 }}>
            <h4 className="text-sm font-bold uppercase tracking-wider text-golden mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-golden transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div {...fadeIn} transition={{ duration: 0.4, delay: 0.2 }}>
            <h4 className="text-sm font-bold uppercase tracking-wider text-golden mb-4">
              Connect
            </h4>
            <p className="text-cream/70 text-sm mb-4">
              Got a psychology question? A spicy take? A topic you&apos;d love
              me to cover? Let&apos;s talk.
            </p>
            <div className="flex gap-3">
              {["📸", "🐦", "💌"].map((emoji, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.15, rotate: -8 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-golden/20 flex items-center justify-center text-lg hover:bg-golden/40 transition-colors cursor-pointer"
                >
                  {emoji}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>&copy; {new Date().getFullYear()} Pari Darmora. Cooked in Delhi.</p>
          <p className="font-handwritten text-base text-golden">
            Plated by Chef Pari 🥄
          </p>
        </div>
      </div>
    </footer>
  );
}
