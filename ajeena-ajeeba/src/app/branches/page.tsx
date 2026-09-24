import type { Metadata } from "next";

export const metadata: Metadata = { title: "فروعنا | Ajeena Ajeeba Branches" };

// TODO: add real branch data (name, district, map link, hours) once confirmed by the brand.
const branches: { nameAr: string; nameEn: string; district: string; hours: string; mapUrl: string }[] = [];

const deliveryApps = ["HungerStation", "Jahez", "Keeta", "ToYou"];

export default function BranchesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold">فروعنا</h1>
        <p lang="en" className="text-brown/70">Our Branches</p>
      </header>

      {branches.length === 0 ? (
        <div className="mt-10 rounded-3xl border-2 border-dashed border-orange bg-cream p-10 text-center">
          <p className="text-2xl font-extrabold">قريب منك.. قريباً هنا</p>
          <p lang="en" className="mt-1 text-brown/70">Branch locations will be listed here soon.</p>
        </div>
      ) : (
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {branches.map((b) => (
            <li key={b.nameEn} className="rounded-3xl bg-white p-6 shadow-pop">
              <h2 className="text-2xl font-extrabold">{b.nameAr}</h2>
              <p lang="en" className="text-brick">{b.nameEn}</p>
              <p className="mt-2">{b.district}</p>
              <p className="text-sm text-brown/70">{b.hours}</p>
              <a href={b.mapUrl} className="mt-4 inline-block font-bold text-leaf underline">الموقع على الخريطة</a>
            </li>
          ))}
        </ul>
      )}

      <section className="mt-14 rounded-[2rem] bg-pattern p-10 text-center text-cream">
        <h2 className="text-3xl font-extrabold">اطلبها توصلك لين الباب</h2>
        <p lang="en" className="opacity-90">Order on your favourite delivery app</p>
        <ul className="mt-6 flex flex-wrap justify-center gap-3">
          {deliveryApps.map((app) => (
            <li key={app} lang="en" className="rounded-full bg-cream px-5 py-2 font-bold text-brick">
              {app}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
