import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-16 bg-brick text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-10 text-center">
        <Logo size="md" ribbon />
        <p lang="en" className="text-sm opacity-90">Ajeena Ajeeba — Freshly baked fatayer</p>
        <p className="text-sm opacity-90">#تعجب_الأكيلة</p>
        <p className="text-xs opacity-70">
          &copy; {new Date().getFullYear()} عجينة عجيبة · Ajeena Ajeeba. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
