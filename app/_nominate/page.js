"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NominatePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Noto+Serif+Devanagari:wght@600;700&display=swap');
      `}</style>

      <div
        className="min-h-screen bg-[#fffdf7] flex items-center justify-center px-5 py-16"
        style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}
      >
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 12 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 180, damping: 22 }}
          className="bg-white rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.08)] max-w-xl w-full text-center border border-[rgba(200,134,10,0.15)] overflow-hidden"
        >
          {/* Top gold accent bar */}
          <div
            className="h-2"
            style={{ background: 'linear-gradient(90deg, #c8860a, #f5c842, #c8860a)' }}
          />

          <div className="px-7 sm:px-12 py-12">
            {/* Icon */}
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-7"
              style={{ background: 'linear-gradient(135deg, #fef3c7, #fde68a)' }}
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="#b8600a"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                />
              </svg>
            </div>

            {/* Heading */}
            <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#b8700a] mb-3">
              सूचना
            </p>
            <h1
              className="text-[#1a0800] font-bold leading-snug mb-4"
              style={{
                fontFamily: 'Noto Serif Devanagari, serif',
                fontSize: 'clamp(22px, 4vw, 30px)',
                paddingTop: '0.04em',
              }}
            >
              नामांकन की प्रक्रिया समाप्त हो चुकी है
            </h1>

            {/* Subtext */}
            <p
              className="text-[14.5px] text-[#6a4010] leading-relaxed mb-2"
              style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}
            >
              सम्राट विक्रमादित्य सम्मान <strong>2026</strong> के लिए नामांकन की अंतिम तिथि{" "}
              <strong>20 मई 2026</strong> थी।
            </p>
            <p
              className="text-[14px] text-[#6a4010] leading-relaxed mb-8"
              style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}
            >
              अब और नामांकन स्वीकार नहीं किए जा रहे हैं। आपकी रुचि और सहभागिता के लिए हार्दिक धन्यवाद।
            </p>

            {/* Divider */}
            <div
              className="h-px w-24 mx-auto mb-8"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(200,134,10,0.4), transparent)' }}
            />

            {/* Thank-you note */}
            <p
              className="text-[13px] text-[#9a6030] leading-relaxed mb-9"
              style={{ fontFamily: 'Noto Sans Devanagari, sans-serif' }}
            >
              प्राप्त नामांकनों की समीक्षा प्रक्रिया में है। चयन एवं परिणाम संबंधी अद्यतन शीघ्र ही हमारी वेबसाइट पर साझा किए जाएँगे।
            </p>

            {/* CTA */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white text-[13px] font-bold px-8 py-3.5 rounded-full shadow-[0_4px_20px_rgba(184,96,10,0.28)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #b8600a, #cf7610)',
                fontFamily: 'Noto Sans Devanagari, sans-serif',
              }}
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              मुख्य पृष्ठ पर जाएँ
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}