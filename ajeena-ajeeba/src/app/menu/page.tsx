import type { Metadata } from "next";
import PieCard from "@/components/PieCard";
import { menu, drinks } from "@/data/menu";

export const metadata: Metadata = { title: "المنيو | Ajeena Ajeeba Menu" };

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold">المنيو</h1>
        <p lang="en" className="text-brown/70">Our Menu · all prices in SR</p>
        <nav className="mt-6 flex flex-wrap justify-center gap-2">
          {menu.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="rounded-full bg-cream px-4 py-2 font-bold text-brick hover:bg-orange hover:text-white">
              {c.titleAr}
            </a>
          ))}
          <a href="#drinks" className="rounded-full bg-cream px-4 py-2 font-bold text-brick hover:bg-orange hover:text-white">
            المشروبات
          </a>
        </nav>
      </header>

      {menu.map((cat) => (
        <section key={cat.id} id={cat.id} className="scroll-mt-28 pt-14">
          <div className="mb-8 flex items-baseline gap-3 border-b-4 border-orange pb-2">
            <h2 className="text-3xl font-extrabold">{cat.titleAr}</h2>
            <span lang="en" className="text-brick">{cat.titleEn}</span>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cat.items.map((pie) => (
              <PieCard key={pie.id} pie={pie} category={cat.id} />
            ))}
          </div>
        </section>
      ))}

      <section id="drinks" className="scroll-mt-28 pt-14">
        <div className="mb-8 flex items-baseline gap-3 border-b-4 border-orange pb-2">
          <h2 className="text-3xl font-extrabold">المشروبات</h2>
          <span lang="en" className="text-brick">Beverages</span>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {drinks.map((d) => (
            <li key={d.nameEn} className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
              <span>
                <b>{d.nameAr}</b>
                <span lang="en" dir="ltr" className="block text-sm text-brown/70">{d.nameEn}</span>
              </span>
              <span className="text-xl font-extrabold text-brick">{d.price} ر.س</span>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-12 text-center text-xs text-brown/60">
        القيم الغذائية لكل قطعة · Nutrition values per piece
      </p>
    </div>
  );
}
