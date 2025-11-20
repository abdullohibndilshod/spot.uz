import React, { useState } from "react";

interface IconProps {
  stroke?: string;
  fill?: string;
}

interface MenuItem {
  name: string;
  link: string;
}

const menuItems: MenuItem[] = [
  { name: "Yangiliklar", link: "/news" },
  { name: "Maqolalar", link: "/articles" },
  { name: "Foydali", link: "/useful" },
  { name: "Vakansiyalar", link: "/vacancies" }
];

const IconSize = "5";

const SearchIcon: React.FC<IconProps> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-${IconSize} h-${IconSize}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.stroke || "currentColor"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const UserIcon: React.FC<IconProps> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-${IconSize} h-${IconSize}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.stroke || "currentColor"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const TelegramIcon: React.FC<IconProps> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-${IconSize} h-${IconSize}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.stroke || "currentColor"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 8.4V6L3 12L7 14L20 7L10 16L12 18L22 8.4Z" />
    <path d="M22 6L14 14" />
  </svg>
);

const SunMoonIcon: React.FC<IconProps> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.stroke || "currentColor"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {props.fill === "moon" ? (
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    ) : (
      <>
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </>
    )}
  </svg>
);

const MenuIcon: React.FC = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
  </svg>
);

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState("UZ");
  const [isSearching, setIsSearching] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);
  const startSearch = () => setIsSearching(true);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const endSearch = () => {
    const input = document.getElementById("search-input") as HTMLInputElement;
    if (input && input.value.trim() === "") {
      setTimeout(() => setIsSearching(false), 100);
    }
  };

  const primaryTextColor = "text-gray-900";
  const headerBgColor = "bg-blue-200";
  const linkHoverColor = "border-blue-600 text-blue-600";

  return (
    <header
      className={`${headerBgColor} ${primaryTextColor} sticky top-0 z-10 shadow-md transition-colors duration-300`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between p-3 md:p-4">
        <a
          href="/"
          className={`text-2xl font-extrabold ${primaryTextColor} font-sans no-underline transition-all duration-300 ${isSearching ? "mr-0" : "mr-4 md:mr-6"}`}
        >
          spot.
        </a>

        <div className="flex flex-grow items-center transition-opacity duration-300">
          {isSearching ? (
            <div className="mr-4 flex-grow">
              <input
                id="search-input"
                type="text"
                placeholder="Yangiliklar, Maqolalar, Fikrlar bo'yicha qidirish..."
                autoFocus
                onBlur={endSearch}
                className="w-full rounded-md border border-gray-400 bg-white p-2.5 text-base shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          ) : (
            <nav className={`hidden flex-grow transition-opacity duration-300 md:flex`}>
              <ul className="m-0 flex list-none gap-6 p-0 lg:gap-8">
                {menuItems.map(item => (
                  <li
                    key={item.name}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <a
                      href={item.link}
                      className={`py-1 text-base font-semibold no-underline transition-all duration-200 ${primaryTextColor} ${hoveredItem === item.name ? linkHoverColor : "border-transparent"}`}
                      style={{ borderBottomWidth: "2px" }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          {!isSearching && (
            <div
              onClick={startSearch}
              className={`hidden cursor-pointer items-center rounded-lg p-2 text-base font-semibold transition-colors duration-200 hover:bg-blue-300 md:flex`}
              title="Qidiruvni boshlash"
            >
              <SearchIcon stroke="currentColor" />
              <span className="ml-1.5">Qidiruv</span>
            </div>
          )}

          <div
            onClick={startSearch}
            className={`cursor-pointer rounded-full p-2 transition-colors duration-200 hover:bg-blue-300 md:hidden ${isSearching ? "block" : "hidden"}`}
            title="Qidiruv"
          >
            <SearchIcon stroke="currentColor" />
          </div>

          <a
            href="https://t.me/spotuz"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-full p-2 transition-colors duration-200 hover:bg-blue-300"
          >
            <TelegramIcon stroke="currentColor" />
          </a>

          <div
            className="hidden cursor-pointer rounded-full p-2 transition-colors duration-200 hover:bg-blue-300 sm:block"
            title="Profil"
          >
            <UserIcon stroke="currentColor" />
          </div>

          <div className="ml-2 flex gap-1 rounded-md bg-white p-1 text-sm font-bold shadow-inner">
            {["PY", "UZ"].map(langOption => (
              <button
                key={langOption}
                onClick={() => setLanguage(langOption)}
                className={`rounded-md px-2 py-1 transition-colors duration-200 ${
                  langOption === language ? "bg-blue-500 text-white shadow-sm" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {langOption}
              </button>
            ))}
          </div>

          <div
            onClick={toggleDarkMode}
            className={`ml-2 flex h-6 w-12 cursor-pointer items-center rounded-full border border-gray-400 p-0.5 shadow-sm transition-all duration-300 ${isDarkMode ? "justify-end bg-gray-800" : "justify-start bg-white"}`}
            title={isDarkMode ? "Kunduzgi rejim" : "Tungi rejim"}
          >
            <div
              className={`flex h-5 w-5 items-center justify-center rounded-full transition-transform duration-300 ${isDarkMode ? "bg-blue-500" : "bg-blue-200"}`}
            >
              <SunMoonIcon stroke={isDarkMode ? "white" : "currentColor"} fill={isDarkMode ? "moon" : "sun"} />
            </div>
          </div>

          <button
            onClick={toggleMenu}
            className="ml-2 rounded-full p-2 transition-colors duration-200 hover:bg-blue-300 md:hidden"
            title="Menyu"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="transition-max-height overflow-hidden border-t border-blue-300 bg-blue-100 duration-300 ease-in-out md:hidden">
          <ul className="flex flex-col space-y-2 p-4">
            {menuItems.map(item => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="block rounded-md p-2 text-lg font-semibold text-gray-800 transition-colors hover:bg-blue-200"
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
