import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Noto+Serif+Devanagari:wght@600;700&display=swap');

        .nf-sans { font-family: 'Noto Sans Devanagari', sans-serif; }
        .nf-serif { font-family: 'Noto Serif Devanagari', serif; }

        @keyframes nf-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .nf-float { animation: nf-float 4s ease-in-out infinite; }
      `}</style>

      <main
        className="nf-sans min-h-[calc(100vh-140px)] flex items-center justify-center px-5 py-16"
        style={{ background: 'linear-gradient(160deg, #fdf8ee 0%, #fffcf4 60%, #fef4dc 100%)' }}
      >
        <div className="max-w-xl w-full text-center">

          {/* ── Decorative coin / mark ── */}
          <div className="nf-float relative w-24 h-24 mx-auto mb-8">
            <div
              className="absolute inset-[-4px] rounded-full opacity-50"
              style={{ background: 'conic-gradient(from 0deg, #c8860a, #f5c842, #9a6008, #c8860a)' }}
            />
            <div className="absolute inset-[2px] rounded-full bg-[#fffdf7]" />
            <div
              className="relative w-full h-full rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #fef3c7, #fde68a)' }}
            >
              <span
                className="nf-serif font-bold text-[#8b4008]"
                style={{ fontSize: 38, lineHeight: 1, paddingTop: '0.04em' }}
              >
                ?
              </span>
            </div>
          </div>

          {/* ── 404 label ── */}
          <p
            className="text-[10.5px] font-bold tracking-[0.28em] uppercase text-[#b8700a] mb-3"
          >
            त्रुटि 404
          </p>

          {/* ── Heading ── */}
          <h1
            className="nf-serif text-[#1a0800] mb-4 leading-snug"
            style={{ fontSize: 'clamp(24px, 4.5vw, 38px)', paddingTop: '0.04em' }}
          >
            यह पृष्ठ उपलब्ध नहीं है
          </h1>

          {/* ── Subtext ── */}
          <p className="text-[14.5px] text-[#6a4010] leading-relaxed mb-2 max-w-md mx-auto">
            जिस पृष्ठ की आप तलाश कर रहे हैं वह यहाँ नहीं मिला।
          </p>
          <p className="text-[13.5px] text-[#9a6030] leading-relaxed mb-10 max-w-md mx-auto">
            संभव है कि पता बदल गया हो अथवा हटा दिया गया हो। कृपया मुख्य पृष्ठ से पुनः प्रयास करें।
          </p>

          {/* ── Divider ── */}
          <div
            className="h-px w-24 mx-auto mb-10"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(200,134,10,0.4), transparent)',
            }}
          />

          {/* ── CTAs ── */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white text-[13px] font-bold px-8 py-3.5 rounded-full shadow-[0_4px_20px_rgba(184,96,10,0.28)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #b8600a, #cf7610)',
              }}
            >
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 12H5M12 19l-7-7 7-7"
                />
              </svg>
              मुख्य पृष्ठ पर जाएँ
            </Link>

            <Link
              href="/rules"
              className="inline-flex items-center gap-2 border border-[rgba(180,96,10,0.3)] text-[#7a4010] hover:border-[rgba(180,96,10,0.6)] hover:bg-[rgba(200,134,10,0.06)] text-[13px] font-semibold px-7 py-3.5 rounded-full transition-all duration-200"
            >
              नियमावली पढ़ें
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}