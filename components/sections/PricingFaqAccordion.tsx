"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaqItem } from "@/data/faqData";

interface PricingFaqAccordionProps {
  faqs: FaqItem[];
}

export const PricingFaqAccordion: React.FC<PricingFaqAccordionProps> = ({ faqs }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="rounded-2xl glass-panel border border-white/10 overflow-hidden"
        >
          <button
            onClick={() => toggleFaq(idx)}
            className="w-full p-6 flex items-center justify-between text-left cursor-pointer hover:bg-white/5 transition-colors focus-ring rounded-2xl"
            aria-expanded={openFaqIndex === idx}
          >
            <div className="flex items-center gap-3 pr-4">
              <span className="text-[10px] font-mono text-[#18CB96] uppercase tracking-wider shrink-0">
                {faq.category}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {faq.question}
              </h3>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-[#A4A2B2] shrink-0 transition-transform duration-300 ${
                openFaqIndex === idx ? "rotate-180 text-[#18CB96]" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openFaqIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="px-6 pb-6 text-xs sm:text-sm text-[#A4A2B2] leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
