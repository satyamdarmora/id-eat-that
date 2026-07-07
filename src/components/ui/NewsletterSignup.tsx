"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="newsletter" className="bg-primary relative overflow-hidden scroll-mt-20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-golden via-coral to-primary" />
      <div className="absolute top-10 right-10 text-6xl opacity-20 rotate-12">🍽️</div>
      <div className="absolute bottom-10 left-10 text-6xl opacity-20 -rotate-12">🧠</div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-handwritten text-2xl text-golden mb-2 block rotate-[-2deg]">
            never miss a dish
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
            Get the Weekly Menu
          </h2>
          <p className="text-white/80 max-w-md mx-auto mb-8 leading-relaxed">
            One email a week. The best psychology bites, a fresh article, and
            the poll results — delivered to your inbox.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-5 py-3 rounded-full border-2 border-white bg-white/10 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 transition-colors"
              />
              <button
                type="submit"
                className="bg-golden text-deep-plum font-bold px-8 py-3 rounded-full hover:bg-white hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
              >
                Subscribe 🍴
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white/20 rounded-2xl px-8 py-6 max-w-md mx-auto"
            >
              <span className="text-4xl block mb-2">🎉</span>
              <p className="text-white font-heading font-bold text-xl">
                You&apos;re on the list!
              </p>
              <p className="text-white/80 text-sm mt-1">
                First menu drops next Monday. Your brain will thank you.
              </p>
            </motion.div>
          )}

          <p className="text-white/50 text-xs mt-4">
            No spam. Unsubscribe anytime. We respect your inbox (and your superego).
          </p>
        </motion.div>
      </div>
    </section>
  );
}
