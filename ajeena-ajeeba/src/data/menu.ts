// Official Ajeena Ajeeba menu — prices in SR (aggregator channel), nutrition per piece.
// Source: branded menu + item master. Do not invent prices or nutrition values.

export type Pie = {
  id: string;
  nameEn: string;
  nameAr: string;
  price: number;
  calories: number;
  protein: number;
  weight: number;
  fillingEn: string;
  fillingAr: string;
  tag?: { en: string; ar: string };
};

export type MenuCategory = {
  id: string;
  titleEn: string;
  titleAr: string;
  items: Pie[];
};

export const menu: MenuCategory[] = [
  {
    id: "breakfast",
    titleEn: "Breakfast Fatayer",
    titleAr: "فطاير الفطور",
    items: [
      {
        id: "kishna",
        nameEn: "Kishna Pie",
        nameAr: "فطيرة الكشنة",
        price: 6,
        calories: 226,
        protein: 9.0,
        weight: 110,
        fillingEn: "Kishna tomato mix + mixed cheese",
        fillingAr: "خلطة كشنة الطماطم مع أجبان مشكّلة",
        tag: { en: "Lightest", ar: "الأخف" },
      },
      {
        id: "egg-cheese",
        nameEn: "Egg with Cheese Pie",
        nameAr: "فطيرة البيض مع الجبن",
        price: 7,
        calories: 253,
        protein: 11.5,
        weight: 105,
        fillingEn: "Scrambled eggs + spreadable cheese",
        fillingAr: "بيض مخفوق مع جبنة قابلة للدهن",
      },
      {
        id: "shakshuka",
        nameEn: "Shakshuka with Cheese Pie",
        nameAr: "فطيرة الشكشوكة بالجبن",
        price: 7,
        calories: 229,
        protein: 9.3,
        weight: 105,
        fillingEn: "Signature shakshuka mix + cheese",
        fillingAr: "خلطة الشكشوكة الخاصة مع الجبن",
      },
      {
        id: "chicken-kishna",
        nameEn: "Chicken with Kishna Pie",
        nameAr: "فطيرة الدجاج مع الكشنة",
        price: 7,
        calories: 290,
        protein: 17.9,
        weight: 115,
        fillingEn: "Grilled chicken + tomato kishna + cheese",
        fillingAr: "دجاج مشوي مع كشنة الطماطم والجبن",
        tag: { en: "Best protein per riyal", ar: "أعلى بروتين مقابل السعر" },
      },
      {
        id: "egg-beef",
        nameEn: "Egg with Beef Pie",
        nameAr: "فطيرة البيض مع اللحم",
        price: 8,
        calories: 314,
        protein: 13.8,
        weight: 105,
        fillingEn: "Scrambled eggs + sautéed beef + smoked sauce",
        fillingAr: "بيض مخفوق مع لحم مشوّح وصوص مدخّن",
      },
      {
        id: "falafel",
        nameEn: "Falafel Pie",
        nameAr: "فطيرة الفلافل",
        price: 8,
        calories: 333,
        protein: 10.3,
        weight: 122,
        fillingEn: "Falafel, fresh tomato, pickles, mint, parsley, tahini",
        fillingAr: "فلافل، طماطم طازجة، مخلل، نعناع، بقدونس، طحينة",
      },
    ],
  },
  {
    id: "premium",
    titleEn: "Premium Fatayer",
    titleAr: "الفطاير المميزة",
    items: [
      {
        id: "beef-shawarma",
        nameEn: "Beef Shawarma Pie",
        nameAr: "فطيرة شاورما اللحم",
        price: 12,
        calories: 362,
        protein: 14.1,
        weight: 135,
        fillingEn: "Marinated beef, mint, parsley, tomato, tahini, cucumber pickle",
        fillingAr: "لحم متبّل، نعناع، بقدونس، طماطم، طحينة، مخلل خيار",
      },
      {
        id: "kofta",
        nameEn: "Kofta Pie",
        nameAr: "فطيرة الكفتة",
        price: 12,
        calories: 356,
        protein: 18.3,
        weight: 135,
        fillingEn: "Grilled kofta stuffed with cheese + smoked sauce",
        fillingAr: "كفتة مشوية محشية جبن مع صوص مدخّن",
      },
      {
        id: "tawook",
        nameEn: "Tawook Pie",
        nameAr: "فطيرة شيش الطاووق",
        price: 12,
        calories: 373,
        protein: 22.9,
        weight: 125,
        fillingEn: "Chicken tawook, smoked sauce, pickles",
        fillingAr: "شيش طاووق دجاج، صوص مدخّن، مخلل",
        tag: { en: "Protein king", ar: "ملك البروتين" },
      },
      {
        id: "spicy-chicken",
        nameEn: "Spicy Chicken Pie",
        nameAr: "فطيرة الدجاج الحار",
        price: 12,
        calories: 295,
        protein: 19.3,
        weight: 121,
        fillingEn: "Spicy grilled chicken, creamy sauce",
        fillingAr: "دجاج مشوي حار مع صوص كريمي",
      },
    ],
  },
  {
    id: "dessert",
    titleEn: "Dessert Fatayer",
    titleAr: "فطاير الحلا",
    items: [
      {
        id: "kunafa",
        nameEn: "Kunafa Pie",
        nameAr: "فطيرة الكنافة",
        price: 10,
        calories: 371,
        protein: 13.2,
        weight: 115,
        fillingEn: "Kunafa mix",
        fillingAr: "خلطة الكنافة",
      },
      {
        id: "nutella-pb",
        nameEn: "Nutella Peanut Butter Pie",
        nameAr: "فطيرة النوتيلا وزبدة الفول السوداني",
        price: 10,
        calories: 440,
        protein: 11.8,
        weight: 95,
        fillingEn: "Original Nutella + peanut butter",
        fillingAr: "نوتيلا أصلية مع زبدة الفول السوداني",
      },
    ],
  },
];

export const drinks = [
  { nameEn: "Pepsi / Diet Pepsi / 7 Up / Mirinda (can)", nameAr: "بيبسي / بيبسي دايت / سفن أب / ميرندا", price: 4 },
  { nameEn: "Water (bottle)", nameAr: "ماء", price: 1 },
];

export type Box = {
  id: string;
  nameEn: string;
  nameAr: string;
  subtitleEn: string;
  subtitleAr: string;
  pieces: number;
  price: number;
  value: number;
  calories: number;
  protein: number;
  contents: { pieId: string; qty: number }[];
};

export const boxes: Box[] = [
  {
    id: "khafayef",
    nameEn: "Al Khafayef Assortment",
    nameAr: "تشكيلة الخفايف",
    subtitleEn: "Delight Box",
    subtitleAr: "بوكس الخفايف",
    pieces: 9,
    price: 50,
    value: 61,
    calories: 2326,
    protein: 91,
    contents: [
      { pieId: "egg-cheese", qty: 3 },
      { pieId: "kishna", qty: 4 },
      { pieId: "falafel", qty: 2 },
    ],
  },
  {
    id: "ajebah",
    nameEn: "Ajebah Assortment",
    nameAr: "تشكيلة عجيبة",
    subtitleEn: "Breakfast Box",
    subtitleAr: "بوكس الفطور",
    pieces: 12,
    price: 80,
    value: 86,
    calories: 3287,
    protein: 144,
    contents: [
      { pieId: "shakshuka", qty: 2 },
      { pieId: "egg-cheese", qty: 2 },
      { pieId: "kishna", qty: 2 },
      { pieId: "chicken-kishna", qty: 2 },
      { pieId: "egg-beef", qty: 2 },
      { pieId: "falafel", qty: 2 },
    ],
  },
  {
    id: "chef",
    nameEn: "The Chef's Assortment",
    nameAr: "تشكيلة الشيف",
    subtitleEn: "Premium Box",
    subtitleAr: "البوكس المميز",
    pieces: 12,
    price: 95,
    value: 116,
    calories: 3847,
    protein: 193,
    contents: [
      { pieId: "shakshuka", qty: 2 },
      { pieId: "chicken-kishna", qty: 2 },
      { pieId: "tawook", qty: 2 },
      { pieId: "beef-shawarma", qty: 2 },
      { pieId: "kofta", qty: 2 },
      { pieId: "egg-beef", qty: 2 },
    ],
  },
];

export const allPies = menu.flatMap((c) => c.items);
export const pieById = (id: string) => allPies.find((p) => p.id === id);
