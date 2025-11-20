import React from "react";
interface FeaturedArticleProps {
  category: string;
  title: string;
  imageUrl: string;
}

interface SidebarArticle {
  category: string;
  title: string;
  categoryColor: string;
}

interface MainArticle {
  time: string;
  category: string;
  title: string;
  summary: string;
  imageUrl: string;
}

interface BannerProps {
  bannerImageUrl: string;
}

const SidebarItem: React.FC<SidebarArticle> = ({ category, title, categoryColor }) => (
  <div className="-mx-2 cursor-pointer rounded p-2 transition duration-150 hover:bg-gray-50">
    <p className={`text-sm font-medium ${categoryColor} mb-1 uppercase`}>{category}</p>{" "}
    <h3 className="text-lg leading-snug font-semibold text-gray-800">{title}</h3>{" "}
  </div>
);

const ArticleWithSummary: React.FC<MainArticle> = ({ time, category, title, summary, imageUrl }) => (
  <div className="flex space-x-3 border-b border-gray-200 pb-4 sm:space-x-4 sm:pb-6">
    <div className="flex-1">
      <p className="mb-1 text-xs text-gray-500">
        {time} <span className="font-medium text-red-600">{category}</span>{" "}
      </p>
      <h3 className="mb-1 cursor-pointer text-lg leading-snug font-bold text-gray-900 transition hover:text-blue-600 sm:mb-2 sm:text-xl">
        {title}
      </h3>
      <p className="line-clamp-2 text-sm text-gray-600 sm:line-clamp-3">{summary}</p>{" "}
    </div>
    <div className="h-20 w-24 flex-shrink-0 sm:h-24 sm:w-28">
      <img src={imageUrl} alt={title} className="h-full w-full rounded-lg object-cover" />{" "}
    </div>
  </div>
);

const VerticalBanner: React.FC<BannerProps> = ({ bannerImageUrl }) => (
  <div
    className="relative h-full min-h-[500px] w-full overflow-hidden rounded-lg bg-cover bg-center shadow-xl"
    style={{ backgroundImage: `url('${bannerImageUrl}')` }}
  ></div>
);

const FeaturedItem: React.FC<FeaturedArticleProps> = ({ category, title, imageUrl }) => (
  <div
    className="relative h-full min-h-[400px] overflow-hidden rounded-xl bg-cover bg-center shadow-lg"
    style={{ backgroundImage: `url('${imageUrl}')` }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>{" "}
    <div className="absolute right-0 bottom-0 left-0 p-6 text-white">
      <p className="mb-2 text-sm font-medium opacity-80">{category}</p>{" "}
      <h2 className="text-2xl leading-tight font-bold">{title}</h2>{" "}
    </div>
  </div>
);

const featuredArticle: FeaturedArticleProps = {
  category: "Foydali",
  title: "Bepul, faqat musulmonlar uchun va bir xil foizlarda: islomiy banking haqida 5 ta mif",
  imageUrl: "/src/image/bank.png"
};

const sidebarArticles: SidebarArticle[] = [
  {
    category: "Biznes",
    title: "Centrum Air rahbari: monopoliya, reyslar kechikishi va kengayish rejalari haqida",
    categoryColor: "text-orange-600"
  },
  {
    category: "Biznes",
    title: "Kitobim endi meniki: Oʻtkan kunlar tarjimasi muallif ruxsatisiz internetda tarqaldi",
    categoryColor: "text-orange-600"
  },
  {
    category: "Iqtisodiyot",
    title: "Oʻzbekiston islomiy bank tizimini joriy etishga tayyorlanmoqda. Bu nima beradi?",
    categoryColor: "text-green-600"
  }
];

const SimplifiedNewsLayout: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl bg-gray-50 p-4 md:p-8 lg:p-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="space-y-4 rounded-xl border bg-white p-4 shadow-sm md:col-span-1">
          {sidebarArticles.map((item, index) => (
            <React.Fragment key={index}>
              <SidebarItem {...item} />
              {index < sidebarArticles.length - 1 && <div className="my-2 border-t border-gray-200"></div>}
            </React.Fragment>
          ))}
        </div>
        <div className="md:col-span-2">
          <FeaturedItem {...featuredArticle} />
        </div>
      </div>
    </div>
  );
};

export default SimplifiedNewsLayout;
