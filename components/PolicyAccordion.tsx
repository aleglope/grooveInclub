"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PolicyAccordionProps {
  title: string;
  content: string;
}

const PolicyAccordion = ({ title, content }: PolicyAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const formatContent = (text: string) => {
    return text.split("\n").map((paragraph, index) => (
      <p key={index} className="mb-2">
        {paragraph.trim() && (
          <span
            className={`
              ${
                paragraph.trim().toUpperCase() === paragraph.trim()
                  ? "font-semibold text-purple"
                  : ""
              }
              ${paragraph.startsWith("•") ? "block pl-4" : ""}
            `}
          >
            {paragraph}
          </span>
        )}
      </p>
    ));
  };

  return (
    <div className="w-full border border-gray-700 rounded-md overflow-hidden">
      <button
        className="w-full py-1.5 px-3 text-left text-gray-200 bg-gray-900 hover:bg-gray-800 transition-colors flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm font-medium">{title}</span>
        <span
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="text-xs leading-tight text-gray-300 bg-gray-800 rounded-b-md border-t border-gray-700">
              <div className="h-[15vh] overflow-y-auto p-2 space-y-1 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                {formatContent(content)}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PolicyAccordion;
