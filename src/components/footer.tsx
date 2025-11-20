import React, { useState } from "react";

const IconSize = "5";

interface IconProps {
  stroke?: string;
  fill?: string;
}

const IconWrapper: React.FC<IconProps & { children: React.ReactNode }> = ({ children, stroke, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-${IconSize} h-${IconSize}`}
    viewBox="0 0 24 24"
    fill={fill || "none"}
    stroke={stroke || "currentColor"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const TelegramIcon: React.FC<IconProps> = props => (
  <IconWrapper {...props}>
    <path d="M22 8.4V6L3 12L7 14L20 7L10 16L12 18L22 8.4Z" />
    <path d="M22 6L14 14" />
  </IconWrapper>
);

const FacebookIcon: React.FC<IconProps> = props => (
  <IconWrapper {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </IconWrapper>
);

const InstagramIcon: React.FC<IconProps> = props => (
  <IconWrapper {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </IconWrapper>
);

// 4. YouTube Icon
const YouTubeIcon: React.FC<IconProps> = props => (
  <IconWrapper {...props}>
    <path d="M2.5 17.5v-11c0-.85.65-1.5 1.5-1.5h16c.85 0 1.5.65 1.5 1.5v11c0 .85-.65 1.5-1.5 1.5h-16c-.85 0-1.5-.65-1.5-1.5z" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </IconWrapper>
);

interface TextLinkProps {
  defaultColor: string;
  hoverColor: string;
  href: string;
  children: React.ReactNode;
}

const TextLink: React.FC<TextLinkProps> = ({ children, defaultColor, hoverColor, href }) => {
  return (
    <a
      href={href}
      className={`text-[15px] font-medium no-underline transition-colors duration-200 ${defaultColor} hover:${hoverColor}`}
    >
      {children}
    </a>
  );
};

interface SocialLinkProps extends TextLinkProps {
  Icon: React.FC<IconProps>;
}

const SocialLink: React.FC<SocialLinkProps> = ({ Icon, children, defaultColor, hoverColor, href }) => {
  const [isHovered, setIsHovered] = useState(false);
  const colorClass = isHovered ? hoverColor : defaultColor;
  return (
    <a
      href={href}
      className={`flex items-center gap-2 text-[15px] font-medium no-underline transition-colors duration-200 ${defaultColor} hover:${hoverColor}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon stroke={colorClass.replace("text-", "")} />
      <span>{children}</span>
    </a>
  );
};

const Footer: React.FC = () => {
  const footerBgColor = "bg-[#002d33]";
  const footerTextColor = "text-[#90f6ff]";
  const hoverColor = "text-white";

  return (
    <footer className={`${footerBgColor} ${footerTextColor} py-8 font-sans text-[15px] md:py-10`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="space-y-4">
            <p className="mt-0 mb-3 text-lg font-bold">
              © 2017-2025 Spot <br className="hidden md:block" /> Biznes va texnologiyalar.
            </p>
            <p className="m-0">"Afisha Media" MCHJ</p>
            <p className="m-0 pt-4">
              Sahifada xato topdingizmi? <br /> Ctrl+Enter tugmalarini bosing
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="mb-1 text-base font-bold text-white">Navigatsiya</h3>
            <TextLink defaultColor={footerTextColor} hoverColor={hoverColor} href="/boglanish">
              Bog'lanish
            </TextLink>
            <TextLink defaultColor={footerTextColor} hoverColor={hoverColor} href="/reklama">
              Reklama joylashtirish
            </TextLink>
            <TextLink defaultColor={footerTextColor} hoverColor={hoverColor} href="/sayt-haqida">
              Sayt haqida
            </TextLink>
            <TextLink defaultColor={footerTextColor} hoverColor={hoverColor} href="/ish">
              Ish
            </TextLink>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="mb-1 text-base font-bold text-white">Biz Ijtimoiy Tarmoqlarda</h3>
            <SocialLink
              Icon={TelegramIcon}
              defaultColor={footerTextColor}
              hoverColor={hoverColor}
              href="https://t.me/spotuz"
            >
              Telegram
            </SocialLink>
            <SocialLink
              Icon={FacebookIcon}
              defaultColor={footerTextColor}
              hoverColor={hoverColor}
              href="https://fb.com/spotuz"
            >
              Facebook
            </SocialLink>
            <SocialLink
              Icon={InstagramIcon}
              defaultColor={footerTextColor}
              hoverColor={hoverColor}
              href="https://instagram.com/spot.uz"
            >
              Instagram
            </SocialLink>
            <SocialLink
              Icon={YouTubeIcon}
              defaultColor={footerTextColor}
              hoverColor={hoverColor}
              href="https://youtube.com/spotuz"
            >
              YouTube
            </SocialLink>
            <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-base font-bold text-white">
              18+
            </div>
          </div>
          <div className="space-y-3 text-sm leading-relaxed lg:col-span-1">
            <p className="m-0">Saytdagi xabarlardan foydalanish uchun «Spot.uz»ning yozma roziligi olinishi shart.</p>
            <p className="m-0">Elektron OAV guvohnomasi №0207. Berilgan sanasi: 2019-yil 13-avgust</p>
            <p className="m-0">
              Muassis: "Afisha Media" MCHJ <br /> Bosh muharrir: F.Ekenova Dinora Fayzullayevna
            </p>
            <p className="m-0">
              Manzil: 100007, Toshkent, Parkent ko'chasi, 26A <br /> Elektron manzil: info@spot.uz
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
