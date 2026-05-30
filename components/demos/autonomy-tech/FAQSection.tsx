"use client";

import { motion } from "framer-motion";
import type { FAQ } from "@/lib/types/autonomy-tech";
import { SectionHeading } from "./SectionHeading";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Frequently asked questions" />
        <div className="mt-10 space-y-4">
          {faqs.map((faq, i) => (
            <motion.details
              key={faq.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={cn(tc.cardSubtle, "group p-5")}
            >
              <summary className="cursor-pointer list-none font-medium text-foreground [&::-webkit-details-marker]:hidden">
                {faq.question}
              </summary>
              <p className={cn("mt-3 text-sm leading-relaxed", tc.body)}>
                {faq.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
