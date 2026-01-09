export function Chevron({ open }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={`
        w-4 h-4
        flex-shrink-0
        text-gray-700
        transition-transform
        duration-300
        ease-out
        motion-reduce:transition-none
        ${open ? "rotate-180" : ""}
      `}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
