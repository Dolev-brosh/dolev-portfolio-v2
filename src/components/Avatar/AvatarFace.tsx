/**
 * Cartoon face used both as the page logo and the interactive avatar.
 * Strokes inherit `currentColor` so the same artwork can render
 * near-black (avatar) or mint green (logo) from CSS alone.
 */
export default function AvatarFace() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
    >
      {/* ears */}
      <circle cx="26" cy="112" r="11" fill="var(--color-surface)" stroke="currentColor" strokeWidth="7" />
      <circle cx="174" cy="112" r="11" fill="var(--color-surface)" stroke="currentColor" strokeWidth="7" />
      {/* head */}
      <circle cx="100" cy="110" r="72" fill="var(--color-surface)" stroke="currentColor" strokeWidth="7" />
      {/* hair */}
      <path
        d="M 31 92 A 72 72 0 0 1 169 92 Q 100 58 31 92 Z"
        fill="currentColor"
      />
      {/* glasses */}
      <circle cx="71" cy="110" r="21" fill="var(--color-surface)" stroke="currentColor" strokeWidth="7" />
      <circle cx="129" cy="110" r="21" fill="var(--color-surface)" stroke="currentColor" strokeWidth="7" />
      <line x1="92" y1="106" x2="108" y2="106" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      {/* happy closed eyes */}
      <path d="M 62 113 Q 71 103 80 113" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <path d="M 120 113 Q 129 103 138 113" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      {/* smile */}
      <path d="M 82 152 Q 100 166 118 152" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}
