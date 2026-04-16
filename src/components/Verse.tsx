"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const verse = "Encomienda a Jehová tus obras, y tus pensamientos serán afirmados";
const reference = "Proverbios 16:3";

export default function Verse() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const words = verse.split(" ");

  return (
    <section ref={ref} className="relative py-20 sm:py-28">
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        {/* Top line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mx-auto mb-12 h-px w-24 origin-center bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        {/* Verse - word by word */}
        <p className="font-heading text-xl font-light italic leading-relaxed tracking-wide text-white/60 sm:text-2xl md:text-3xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
              transition={{
                duration: 0.6,
                delay: 0.3 + i * 0.08,
                ease: "easeOut",
              }}
              className="inline-block mx-[0.15em]"
            >
              {word}
            </motion.span>
          ))}
        </p>

        {/* Reference */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 + words.length * 0.08 + 0.3 }}
          className="mt-6 inline-block text-sm tracking-widest text-white/25"
        >
          — {reference} —
        </motion.span>

        {/* Bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="mx-auto mt-12 h-px w-24 origin-center bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </div>
    </section>
  );
}
