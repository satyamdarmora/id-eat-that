"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PollOption {
  label: string;
  votes: number;
}

interface PollWidgetProps {
  question: string;
  options: PollOption[];
}

export function PollWidget({ question, options }: PollWidgetProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const totalVotes = options.reduce((sum, opt) => sum + opt.votes, 0) + (hasVoted ? 1 : 0);

  const handleVote = (index: number) => {
    if (hasVoted) return;
    setSelectedIndex(index);
    setHasVoted(true);
  };

  return (
    <div className="bg-white border-2 border-deep-plum rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0_#1A1A1A]">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-2xl">📊</span>
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Poll of the Week
        </span>
      </div>
      <h3 className="font-heading font-bold text-xl sm:text-2xl text-deep-plum mb-6">
        {question}
      </h3>

      <div className="space-y-3">
        {options.map((option, index) => {
          const votes = option.votes + (hasVoted && selectedIndex === index ? 1 : 0);
          const percentage = Math.round((votes / totalVotes) * 100);
          const isSelected = selectedIndex === index;

          return (
            <button
              key={index}
              onClick={() => handleVote(index)}
              disabled={hasVoted}
              className={`w-full text-left relative rounded-xl border-2 overflow-hidden transition-all ${
                hasVoted
                  ? isSelected
                    ? "border-golden bg-soft-yellow"
                    : "border-gray-200 bg-white"
                  : "border-deep-plum/20 bg-white hover:border-golden hover:bg-soft-yellow cursor-pointer"
              }`}
            >
              {/* Progress bar background */}
              <AnimatePresence>
                {hasVoted && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`absolute inset-y-0 left-0 ${
                      isSelected ? "bg-golden/20" : "bg-gray-100"
                    }`}
                  />
                )}
              </AnimatePresence>

              <div className="relative px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {!hasVoted && (
                    <div className="w-5 h-5 rounded-full border-2 border-deep-plum/30 flex-shrink-0" />
                  )}
                  {hasVoted && isSelected && (
                    <div className="w-5 h-5 rounded-full bg-golden flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 16 16" className="w-3 h-3 text-deep-plum fill-current">
                        <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
                      </svg>
                    </div>
                  )}
                  {hasVoted && !isSelected && (
                    <div className="w-5 h-5 rounded-full border-2 border-gray-200 flex-shrink-0" />
                  )}
                  <span className={`text-sm font-medium ${isSelected ? "text-deep-plum font-bold" : "text-deep-plum"}`}>
                    {option.label}
                  </span>
                </div>

                {hasVoted && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-sm font-bold text-muted"
                  >
                    {percentage}%
                  </motion.span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {hasVoted && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xs text-muted mt-4 text-center"
        >
          {totalVotes.toLocaleString()} people voted · Thanks for your take!
        </motion.p>
      )}

      {!hasVoted && (
        <p className="text-xs text-muted mt-4 text-center">
          {totalVotes.toLocaleString()} people have voted — add yours!
        </p>
      )}
    </div>
  );
}
