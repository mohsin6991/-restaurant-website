import Link from "next/link";
import Logo from "@/components/Logo";
import PieCard from "@/components/PieCard";
import Image from "next/image";
import { pieById, boxes } from "@/data/menu";

const highlights = [
  { id: "beef-shawarma", category: "premium" },
  { id: "chicken-kishna", category: "breakfast" },
  { id: "egg-beef", category: "breakfast" },
];

const facts = [
  { big: "6 ر.س", ar: "فطيرة فطور كاملة تبدأ من", en: "Breakfast pies from 6 SR" },
  { big: "22.9g", ar: "بروتين في فطيرة الطاووق", en: "Protein in one Tawook Pie" },
  { big: "12", ar: "فطيرة في بوكس المشاركة", en: "Pies in a sharing box" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-pattern text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="text-center md:text-start">
            <Logo size="lg" ribbon />
            <h1 className="mt-8 text-3xl font-extrabold leading-snug sm:text-4xl">
              الجبنة تمط.. والقلب ينبسط
            </h1>
            <p lang="en" className="mt-2 text-lg opacity-90">
              Freshly baked fatayer, loaded with flavour and topped with sesame &amp; nigella.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <Link href="/menu" className="rounded-full bg-brick px-7 py-3 text-lg font-bold text-cream shadow-lg transition hover:scale-105">
                شوف المنيو · <span lang="en">See the menu</span>
              </Link>
              <Link href="/menu#boxes" className="rounded-full border-2 border-cream px-7 py-3 text-lg font-bold transition hover:bg-cream hover:text-brick">
                البوكسات · <span lang="en">Boxes</span>
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-8 rounded-full bg-cream/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-pop">
              <Image
                src="/menu/egg-beef.jpg"
                alt="فطيرة البيض مع اللحم · Egg with Beef Pie"
                width={800}
                height={800}
                priority
                className="aspect-square w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="mx-auto -mt-8 grid max-w-5xl gap-4 px-4 sm:grid-cols-3">
        {facts.map((f) => (
          <div key={f.en} className="rounded-3xl bg-cream p-6 text-center shadow-pop">
            <p className="text-4xl font-extrabold text-brick" dir="ltr">{f.big}</p>
            <p className="mt-1 font-bold">{f.ar}</p>
            <p lang="en" className="text-sm text-brown/70">{f.en}</p>
          </div>
        ))}
      </section>

      {/* Favourites */}
      <section className="mx-auto max-w-6xl px-4 pt-20">
        <h2 className="text-center text-3xl font-extrabold">فطورك مو فطور بدون فطيرة</h2>
        <p lang="en" className="text-center text-brown/70">Crowd favourites</p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h) => {
            const pie = pieById(h.id)!;
            return <PieCard key={pie.id} pie={pie} category={h.category} />;
          })}
        </div>
        <div className="mt-10 text-center">
          <Link href="/menu" className="font-bold text-brick underline underline-offset-4">
            المنيو كامل ← <span lang="en">Full menu</span>
          </Link>
        </div>
      </section>

      {/* Boxes teaser */}
      <section className="mx-auto mt-20 max-w-6xl px-4">
        <div className="grid items-center gap-8 rounded-[2.5rem] bg-leaf p-8 text-cream md:grid-cols-2 md:p-12">
          <div>
            <h2 className="text-3xl font-extrabold">جمعة الأهل والشلة؟ عليك بالبوكس</h2>
            <p lang="en" className="mt-2 opacity-90">Sharing boxes for family, friends and the office.</p>
            <Link href="/menu#boxes" className="mt-6 inline-block rounded-full bg-orange px-6 py-3 font-bold text-white transition hover:bg-brick">
              اختر بوكسك · <span lang="en">Pick your box</span>
            </Link>
          </div>
          <ul className="grid gap-3">
            {boxes.map((b) => (
              <li key={b.id} className="flex items-center justify-between rounded-2xl bg-cream/10 px-5 py-3">
                <span>
                  <b>{b.nameAr}</b> <span className="text-sm opacity-80">· {b.pieces} قطع</span>
                </span>
                <span className="text-xl font-extrabold">{b.price} ر.س</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
