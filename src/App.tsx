import { useState, useEffect } from "react";
import { FaDiscord, FaTiktok, FaApple, FaAndroid, FaWindows } from "react-icons/fa";

const YEAR = new Date().getFullYear();

const translations = {
  ar: {
    siteTitle: "بيكورا",
    siteSubtitle: "تحميل الألعاب — iOS • Android • Windows",
    langSelectTitle: "اختر اللغة",
    langSelectSub: "Choose your language",
    games: "الألعاب",
    signingApps: "تطبيقات التوقيع",
    tapHere: "اضغط هنا",
    support: "الدعم والمساعدة",
    supportText: "كل شروحات بيكورا موجودة في سيرفرنا على الديسكورد",
    followUs: "تابعنا",
    copyright: `© ${YEAR} جميع الحقوق محفوظة لـ korone arabs community`,
    download: "تحميل",
    windowsNote: "نسخة ويندوز تشغّل جميع إصدارات اللعبة من 2017 حتى 2021 بملف واحد فقط.",
    platforms: { ios: "آيفون", android: "أندرويد", windows: "ويندوز" },
  },
  en: {
    siteTitle: "Pekora",
    siteSubtitle: "Download Games — iOS • Android • Windows",
    langSelectTitle: "Choose Language",
    langSelectSub: "اختر اللغة",
    games: "Games",
    signingApps: "Signing Apps",
    tapHere: "Tap Here",
    support: "Support & Help",
    supportText: "All Pekora tutorials are available in our Discord server.",
    followUs: "Follow Us",
    copyright: `© ${YEAR} All rights reserved — korone arabs community`,
    download: "Download",
    windowsNote: "The Windows version runs all game editions from 2017 to 2021 with a single launcher.",
    platforms: { ios: "iPhone", android: "Android", windows: "Windows" },
  },
};

const gamesData = {
  ios: [
    { nameAr: "بيكورا 2017", nameEn: "Pekora 2017", file: "Pekora2017.ipa", image: "/images/pekora2017.jpg" },
    { nameAr: "بيكورا 2020", nameEn: "Pekora 2020", file: "Pekora2020.ipa", image: "/images/pekora2020.jpg" },
    { nameAr: "بيكورا 2021", nameEn: "Pekora 2021", file: "KoroneTwentyOne2.ipa", image: "/images/pekora2021.jpg" },
  ],
  android: [
    { nameAr: "بيكورا 2017", nameEn: "Pekora 2017", file: "Korone_2017.apk", image: "/images/pekora2017.jpg" },
    { nameAr: "بيكورا 2020", nameEn: "Pekora 2020", file: "Korone_2020.apk", image: "/images/pekora2020.jpg" },
    { nameAr: "بيكورا 2021", nameEn: "Pekora 2021", file: "Korone_2021.apk", image: "/images/pekora2021.jpg" },
  ],
  windows: [
    { nameAr: "بيكورا x86", nameEn: "Pekora x86", file: "PekoraPlayerLauncher-x86.zip", image: "/images/pekora2017.jpg" },
    { nameAr: "بيكورا x64", nameEn: "Pekora x64", file: "PekoraPlayerLauncher-x64.zip", image: "/images/pekora2017.jpg" },
  ],
};

const signingApps = [
  { name: "Scarlet", url: "https://usescarlet.com" },
  { name: "Ksgin", url: "https://api.khoindvn.io.vn/a71JoP" },
];

const socials = [
  { name: "Discord", url: "https://discord.gg/koronearabs", icon: <FaDiscord size={30} />, color: "#5865F2" },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@1_pesto?_r=1&_t=ZS-96WkaRATbk4",
    icon: <FaTiktok size={30} />,
    color: "#ffffff",
  },
];

function PlatformBadge({ platform }: { platform: "ios" | "android" | "windows" }) {
  const map = {
    ios: { icon: <FaApple size={13} />, label: "iOS" },
    android: { icon: <FaAndroid size={13} />, label: "Android" },
    windows: { icon: <FaWindows size={13} />, label: "Windows" },
  };
  const { icon, label } = map[platform];
  return (
    <span className="platform-badge">
      {icon}
      <span>{label}</span>
    </span>
  );
}

function IconDownload() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function IconPen() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}

function IconChat() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

type Platform = "ios" | "android" | "windows";
type Lang = "ar" | "en";

function GameCard({
  game,
  platform,
  lang,
  t,
}: {
  game: { nameAr: string; nameEn: string; file: string; image: string };
  platform: Platform;
  lang: Lang;
  t: typeof translations["ar"];
}) {
  return (
    <div className="game-card">
      <a href={`/ipa/${game.file}`} download={game.file} className="game-image-link">
        <img src={game.image} alt={lang === "ar" ? game.nameAr : game.nameEn} className="game-image" />
        <PlatformBadge platform={platform} />
        <div className="download-overlay">
          <IconDownload />
          <span>{t.download}</span>
        </div>
      </a>
      <p className="game-name">{lang === "ar" ? game.nameAr : game.nameEn}</p>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang | null>(null);
  const [platform, setPlatform] = useState<Platform>("ios");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "ar" || saved === "en") setLang(saved);
  }, []);

  function chooseLang(l: Lang) {
    localStorage.setItem("lang", l);
    setLang(l);
  }

  if (!lang) {
    return (
      <div className="lang-screen">
        <div className="lang-card">
          <div className="lang-logo">
            <img src="/images/logo.png" alt="logo" className="lang-logo-img" />
          </div>
          <h1 className="lang-title">بيكورا / Pekora</h1>
          <p className="lang-sub">اختر اللغة — Choose your language</p>
          <div className="lang-buttons">
            <button className="lang-btn" onClick={() => chooseLang("ar")}>
              <span className="lang-flag">🇸🇦</span>
              العربية
            </button>
            <button className="lang-btn" onClick={() => chooseLang("en")}>
              <span className="lang-flag">🇬🇧</span>
              English
            </button>
          </div>
        </div>
      </div>
    );
  }

  const t = translations[lang];
  const dir = lang === "ar" ? "rtl" : "ltr";
  const games = gamesData[platform];

  const platformTabs: { key: Platform; icon: JSX.Element; label: string }[] = [
    { key: "ios", icon: <FaApple size={18} />, label: t.platforms.ios },
    { key: "android", icon: <FaAndroid size={18} />, label: t.platforms.android },
    { key: "windows", icon: <FaWindows size={18} />, label: t.platforms.windows },
  ];

  return (
    <div dir={dir} className="app">
      <header className="site-header">
        <div className="header-inner">
          <div className="header-top">
            <button className="lang-switch-btn" onClick={() => setLang(lang === "ar" ? "en" : "ar")}>
              {lang === "ar" ? "EN" : "عربي"}
            </button>
          </div>
          <h1 className="site-title">{t.siteTitle}</h1>
          <p className="site-subtitle">{t.siteSubtitle}</p>
        </div>
      </header>

      <main className="main-content">
        <section className="section">
          <h2 className="section-title">
            <IconDownload />
            {t.games}
          </h2>

          <div className="platform-tabs">
            {platformTabs.map((tab) => (
              <button
                key={tab.key}
                className={`tab-btn ${platform === tab.key ? "active" : ""}`}
                onClick={() => setPlatform(tab.key)}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="games-grid">
            {games.map((game) => (
              <GameCard key={game.file} game={game} platform={platform} lang={lang} t={t} />
            ))}
          </div>

          {platform === "windows" && (
            <p className="windows-note">{t.windowsNote}</p>
          )}
        </section>

        {platform === "ios" && (
        <section className="section">
          <h2 className="section-title">
            <IconPen />
            {t.signingApps}
          </h2>
          <div className="signing-list">
            {signingApps.map((app) => (
              <div key={app.name} className="signing-item">
                <span className="signing-name">{app.name}</span>
                <a href={app.url} target="_blank" rel="noopener noreferrer" className="signing-btn">
                  {t.tapHere}
                </a>
              </div>
            ))}
          </div>
        </section>
        )}

        <section className="section">
          <h2 className="section-title">
            <IconChat />
            {t.support}
          </h2>
          <div className="support-box">
            <a href="https://discord.gg/koronearabs" target="_blank" rel="noopener noreferrer" className="support-link">
              {t.supportText}
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <section className="section follow-section">
          <h2 className="section-title" style={{ justifyContent: "center" }}>
            <IconGlobe />
            {t.followUs}
          </h2>
          <div className="socials-row">
            {socials.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="social-btn" style={{ color: s.color }}>
                {s.icon}
                <span>{s.name}</span>
              </a>
            ))}
          </div>
        </section>
        <p className="footer-copy">{t.copyright}</p>
      </footer>
    </div>
  );
}
