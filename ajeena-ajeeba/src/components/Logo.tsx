// Typographic stand-in for the official logo. Replace with the official
// logo files (Ajeena_Ajeeba-Logo) in /public when available — never recolor or stretch them.
export default function Logo({ size = "md", ribbon = false }: { size?: "sm" | "md" | "lg"; ribbon?: boolean }) {
  const text = { sm: "text-2xl", md: "text-4xl", lg: "text-6xl sm:text-7xl" }[size];
  return (
    <span className="inline-flex flex-col items-center">
      <span className={`logo-3d font-extrabold leading-none ${text}`}>عجينة عجيبة</span>
      {ribbon && (
        <span className="-mt-1 rotate-[-2deg] rounded-md bg-leaf px-4 py-1 text-lg font-bold text-cream shadow">
          تعجب الأكيلة
        </span>
      )}
    </span>
  );
}
