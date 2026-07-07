"use client";

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/image";

interface PortableArticleBodyProps {
  body: PortableTextBlock[];
}

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.3 }}
        className="text-lg leading-relaxed text-deep-plum/80"
      >
        {children}
      </motion.p>
    ),
    h2: ({ children }) => (
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        className="font-heading font-bold text-2xl sm:text-3xl text-deep-plum mt-10 mb-2"
      >
        {children}
      </motion.h2>
    ),
    h3: ({ children }) => (
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        className="font-heading font-bold text-xl sm:text-2xl text-deep-plum mt-8 mb-2"
      >
        {children}
      </motion.h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-golden pl-5 py-2 my-6 italic text-deep-plum/80 bg-soft-yellow/40 rounded-r-xl">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 text-lg text-deep-plum/80 my-4 pl-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 text-lg text-deep-plum/80 my-4 pl-2">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-deep-plum">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => {
      const href = value?.href || "#";
      const isInternal = href.startsWith("/");
      if (isInternal) {
        return (
          <Link
            href={href}
            className="text-primary font-bold underline decoration-golden decoration-2 underline-offset-4 hover:decoration-coral"
          >
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-bold underline decoration-golden decoration-2 underline-offset-4 hover:decoration-coral"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const builder = urlFor(value);
      if (!builder) return null;
      const src = builder.width(1200).fit("max").auto("format").url();
      return (
        <figure className="my-8">
          <div className="rounded-2xl overflow-hidden border-2 border-deep-plum/20 shadow-[4px_4px_0_#1A1A1A]">
            <Image
              src={src}
              alt={value.alt || ""}
              width={1200}
              height={800}
              className="w-full h-auto block"
            />
          </div>
          {value.caption && (
            <figcaption className="text-sm text-muted text-center mt-2 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    callout: ({ value }) => (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-golden/10 border-2 border-golden rounded-2xl p-6 my-8"
      >
        <h3 className="font-heading font-bold text-lg text-deep-plum mb-2 flex items-center gap-2">
          ✅ {value.title || "Try This Today"}
        </h3>
        <p className="text-muted leading-relaxed whitespace-pre-line">
          {value.text}
        </p>
      </motion.div>
    ),
  },
};

export function PortableArticleBody({ body }: PortableArticleBodyProps) {
  return (
    <div className="space-y-6">
      <PortableText value={body} components={components} />
    </div>
  );
}
