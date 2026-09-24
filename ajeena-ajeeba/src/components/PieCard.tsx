import type { Pie } from "@/data/menu";
import PieArt from "./PieArt";

export default function PieCard({ pie, category }: { pie: Pie; category: string }) {
  return (
    <article className="relative flex flex-col rounded-3xl border-2 border-orange/30 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-pop">
      {pie.tag && (
        <span className="absolute -top-3 start-4 rounded-full bg-leaf px-3 py-1 text-xs font-bold text-cream">
          {pie.tag.ar} · <span lang="en">{pie.tag.en}</span>
        </span>
      )}
      <PieArt category={category} className="mx-auto mb-3 h-24 w-36" />
      <h3 className="text-xl font-extrabold">{pie.nameAr}</h3>
      <p lang="en" dir="ltr" className="text-end text-sm font-semibold text-brick sm:text-start">
        {pie.nameEn}
      </p>
      <p className="mt-2 text-sm">{pie.fillingAr}</p>
      <p lang="en" dir="ltr" className="text-xs text-brown/70">{pie.fillingEn}</p>
      <div className="mt-auto flex items-end justify-between pt-4">
        <div className="flex gap-3 text-xs text-brown/80">
          <span>
            <b className="block text-base text-brown">{pie.calories}</b>سعرة · kcal
          </span>
          <span>
            <b className="block text-base text-leaf">{pie.protein.toFixed(1)}g</b>بروتين · protein
          </span>
        </div>
        <span className="rounded-2xl bg-orange px-3 py-1 text-2xl font-extrabold text-white">
          {pie.price} <small className="text-sm">ر.س</small>
        </span>
      </div>
    </article>
  );
}
