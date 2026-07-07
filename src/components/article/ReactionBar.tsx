"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const reactionTypes = [
  { key: "mindblown", emoji: "🧠", label: "Mind Blown" },
  { key: "lightbulb", emoji: "💡", label: "Lightbulb" },
  { key: "felt", emoji: "❤️", label: "Felt This" },
  { key: "thinking", emoji: "🤔", label: "Make Me Think" },
] as const;

interface ReactionBarProps {
  initialReactions: {
    mindblown: number;
    lightbulb: number;
    felt: number;
    thinking: number;
  };
}

export function ReactionBar({ initialReactions }: ReactionBarProps) {
  const [reactions, setReactions] = useState(initialReactions);
  const [userReactions, setUserReactions] = useState<Record<string, boolean>>(
    {},
  );

  const handleReaction = (key: string) => {
    if (userReactions[key]) return;
    setUserReactions((prev) => ({ ...prev, [key]: true }));
    setReactions((prev) => ({
      ...prev,
      [key]: prev[key as keyof typeof prev] + 1,
    }));
  };

  return (
    <div className="sticky bottom-4 z-40 flex justify-center px-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="bg-white border-2 border-deep-plum rounded-full px-2 sm:px-4 py-2 shadow-lg flex items-center gap-0.5 sm:gap-2"
      >
        {reactionTypes.map(({ key, emoji, label }) => (
          <motion.button
            key={key}
            onClick={() => handleReaction(key)}
            whileHover={{ scale: userReactions[key] ? 1.1 : 1.08 }}
            whileTap={{ scale: 0.9 }}
            className={`flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-full text-sm transition-colors ${
              userReactions[key] ? "bg-golden/20" : "hover:bg-gray-100"
            }`}
            title={label}
          >
            <motion.span
              className="text-lg"
              animate={
                userReactions[key]
                  ? { scale: [1, 1.4, 1], rotate: [0, -10, 10, 0] }
                  : {}
              }
              transition={{ duration: 0.4 }}
            >
              {emoji}
            </motion.span>
            <span className="text-xs font-bold text-muted hidden sm:inline">
              {reactions[key as keyof typeof reactions]}
            </span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
