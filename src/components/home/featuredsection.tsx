import React from "react";

interface MainArticle {
  time: string;
  category: string;
  title: string;
  summary: string;
  imageUrl: string;
}

interface SidebarLink {
  title: string;
}

const MainArticleItem: React.FC<MainArticle> = (
  { time, category, title, summary, imageUrl } // Kichik ekranda space-x-4 dan space-x-3 ga kamaytirildi. pb-4 qilindi.
) => (
  <div className="flex space-x-3 border-b border-gray-200 pb-4">
    <div className="flex-1">
      <p className="mb-1 text-xs text-gray-500">
        {time} <span className="font-medium text-orange-600">{category}</span>
      </p>
      <h3 className="mb-1 cursor-pointer text-base leading-snug font-bold text-gray-900 transition hover:text-blue-600 sm:text-xl">
        {title}
      </h3>
      <p className="line-clamp-2 text-sm text-gray-600 sm:line-clamp-3">{summary}</p>
    </div>
    <div className="h-20 w-20 flex-shrink-0 sm:h-24 sm:w-28">
      <img src={imageUrl} alt={title} className="h-full w-full rounded-lg object-cover" />
    </div>
  </div>
);

const SidebarLinkItem: React.FC<SidebarLink> = ({ title }) => (
  <div className="py-2">
    <a href="#" className="cursor-pointer text-sm leading-snug text-gray-700 transition hover:text-blue-600">
      {title}
    </a>
  </div>
);

const mainArticles: MainArticle[] = [
  {
    time: "Kecha, 19:45",
    category: "Biznes",
    title: "Samarqand viloyatidagi elektr tarmoqlari turk kompaniyasi boshqaruviga topshiriladi",
    summary:
      "HET Aksa Enerji kompaniyasiga elektr tarmoqlarini modernizatsiya qilish va boshqarish loyihasi boʻyicha tenderda gʻolib ekani haqidagi hujjatni topshirdi.",
    imageUrl: "/src/image/img1.png"
  },
  {
    time: "Kecha, 19:33",
    category: "Iqtisodiyot",
    title: "Migratsiya agentligida fuqarolarga tezkor yordam beradigan situatsion markaz tashkil etiladi",
    summary:
      "Shuningdek, litsenziyasiz faoliyatni amalga oshirgan konsalting tashkilotlari uchun jarima miqdori oshiriladi.",
    imageUrl: "/src/image/img2.png"
  },
  {
    time: "Kecha, 19:45",
    category: "Biznes",
    title: "Samarqand viloyatidagi elektr tarmoqlari turk kompaniyasi boshqaruviga topshiriladi",
    summary:
      "HET Aksa Enerji kompaniyasiga elektr tarmoqlarini modernizatsiya qilish va boshqarish loyihasi boʻyicha tenderda gʻolib ekani haqidagi hujjatni topshirdi.",
    imageUrl: "/src/image/img1.png"
  }
];
const sidebarLinks: SidebarLink[] = [
  { title: "O‘zbekistonda team lead: u kim va nima ish qiladi?" },
  { title: "Babl-ti trendi: bunday biznesni qancha mablag‘ bilan boshlash mumkin?" },
  { title: "Formula 1 dagi o‘zbek marshal ayoli: trassadagi hayot, tezlik va O‘zbekistondagi poygalar haqida" },
  { title: "Oqtepa Lavash qanday qilib O‘zbekistondagi eng yetakchi restoran tarmog‘iga aylanmoqchi?" },
  { title: "Tandir biznesi: qiyinchiliklar, daromad va mavsumiylik" },
  { title: "Banklardagi ipoteka kreditlari: 2025-yil oktabr o‘yi bo‘yicha" }
];

const ResponsiveNewsLayout: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl border border-gray-200 bg-white p-2 shadow-md sm:p-4 md:p-8 lg:p-12">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        <div className="space-y-4 md:col-span-2 md:border-r md:border-gray-200 md:pr-6">
          {mainArticles.map((article, index) => (
            <MainArticleItem key={index} {...article} />
          ))}
        </div>
        <div className="space-y-2 border-t border-gray-200 pt-4 md:col-span-1 md:border-t-0 md:pt-0 md:pl-4">
          {sidebarLinks.map((link, index) => (
            <React.Fragment key={index}>
              <SidebarLinkItem {...link} />
              {index < sidebarLinks.length - 1 && <div className="my-1 border-t border-gray-100"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNewsLayout;
