import React from "react";

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

const ArticleWithSummary: React.FC<MainArticle> = ({ time, category, title, summary, imageUrl }) => (
  <div className="flex space-x-3 border-b border-gray-200 pb-4 sm:space-x-4 sm:pb-6">
    <div className="flex-1">
      <p className="mb-1 text-xs text-gray-500">
        {time} <span className="font-medium text-red-600">{category}</span>
      </p>
      <h3 className="mb-1 cursor-pointer text-lg leading-snug font-bold text-gray-900 transition hover:text-blue-600 sm:mb-2 sm:text-xl">
        {title}
      </h3>
      <p className="line-clamp-2 text-sm text-gray-600 sm:line-clamp-3">{summary}</p>
    </div>
    <div className="h-20 w-24 flex-shrink-0 sm:h-24 sm:w-28">
      <img src={imageUrl} alt={title} className="h-full w-full rounded-lg object-cover" />
    </div>
  </div>
);
//
const VerticalBanner: React.FC<BannerProps> = ({ bannerImageUrl }) => (
  <div
    className="relative h-40 min-h-0 w-full overflow-hidden rounded-lg bg-cover bg-center shadow-xl md:h-full md:min-h-[500px]"
    style={{ backgroundImage: `url('${bannerImageUrl}')` }}
  ></div>
);

const mainArticles: MainArticle[] = [];
const bannerData: BannerProps = { bannerImageUrl: "/src/image/agrobank.png" };

const NewsLayout3: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl bg-gray-50 p-3 md:p-8 lg:p-12">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        <div className="space-y-4 pr-0 md:col-span-2 md:space-y-6 md:pr-6">
          {mainArticles.map((article, index) => (
            <ArticleWithSummary key={index} {...article} />
          ))}
        </div>
        <div className="md:col-span-1">
          <VerticalBanner {...bannerData} />
        </div>
      </div>
    </div>
  );
};

export default NewsLayout3;
