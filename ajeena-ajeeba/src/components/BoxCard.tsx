import Image from "next/image";
import { pieById, type Box } from "@/data/menu";

export default function BoxCard({ box: b, featured = false }: { box: Box; featured?: boolean }) {
  const saving = b.value - b.price;
  return (
    <article
      className={`flex flex-col rounded-[2rem] p-7 shadow-pop ${featured ? "bg-orange text-white" : "bg-cream"}`}
    >
      {b.image && (
        <div className="-mx-2 mb-5 overflow-hidden rounded-3xl bg-white">
          <Image
            src={b.image}
            alt={`${b.nameAr} · ${b.nameEn}`}
            width={800}
            height={800}
            className="aspect-[4/3] w-full object-contain p-2"
          />
        </div>
      )}
      <p className={`text-sm font-bold ${featured ? "text-cream" : "text-leaf"}`}>
        {b.subtitleAr} · <span lang="en">{b.subtitleEn}</span>
      </p>
      <h3 className="mt-1 text-3xl font-extrabold">{b.nameAr}</h3>
      <p lang="en" dir="ltr" className="text-end text-sm opacity-80 sm:text-start">{b.nameEn}</p>

      <div className="my-5 flex items-end gap-3">
        <span className="text-5xl font-extrabold">{b.price}</span>
        <span className="pb-1">ر.س</span>
        <span className="pb-1 text-sm line-through opacity-70">{b.value} ر.س</span>
      </div>
      <p className={`inline-block self-start rounded-full px-3 py-1 text-sm font-bold ${featured ? "bg-brick" : "bg-leaf text-cream"}`}>
        توفّر {saving} ر.س · <span lang="en">Save {saving} SR</span>
      </p>

      <ul className="mt-6 space-y-2 text-sm">
        {b.contents.map((c) => {
          const pie = pieById(c.pieId)!;
          return (
            <li key={c.pieId} className="flex justify-between border-b border-current/10 pb-1">
              <span>{pie.nameAr}</span>
              <b>×{c.qty}</b>
            </li>
          );
        })}
      </ul>

      <div className="mt-auto grid grid-cols-3 gap-2 pt-6 text-center text-xs">
        <span><b className="block text-lg">{b.pieces}</b>قطعة</span>
        <span><b className="block text-lg">{b.protein}g</b>بروتين</span>
        <span><b className="block text-lg">{b.calories.toLocaleString("en")}</b>سعرة</span>
      </div>
    </article>
  );
}
