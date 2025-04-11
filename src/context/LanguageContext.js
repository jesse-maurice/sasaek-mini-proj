import React, {
  createContext,
  useContext,
  useState,
} from 'react';

// Define translations for English and Korean
const translations = {
  ENG: {
    home: "Home",
    about: "About",
    app: "App",
    languageToggle: "KOR",
    h1Hero: "special sharing",
    h2Hero: "Precious changes made by a heart that is together",
    paragraphHero: "A touching moment of joy and sharing",
    h1Culture: "We are creating a new culture of sharing.",
    h2Culture: "we are",
    h3Culture: "It is the fragrance of thought.",
    paragraphCulture:
      "The Scent of Thought is a community of literary figures and a non-profit organization that strives to contribute to society through 'sharing a happy culture' and to create an advanced and sound social culture.",
  },
  KOR: {
    home: "홈",
    about: "소개",
    app: "앱",
    languageToggle: "ENG",
    h1Hero: "특별한 나눔",
    h2Hero: "함께하는 마음이 만드는 소중한 변화",
    paragraphHero: "즐거움과 나눔이 있는 감동의 순간",
    h1Culture: "새로운 문화 나눔을 만들어갑니다.",
    h2Culture: "우리는",
    h3Culture: "사색의향기입니다.",
    paragraphCulture:
      "사색의향기는 문학인들의 커뮤니티로서 '행복한 문화 나눔'을 통한 사회 공헌과 선진적이고 건전한 사회 문화를 만들어나가기 위해 노력하는 비영리 단체입니다.",
  },
};

// Create the context
const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("KOR");

  // Function to change language
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, translations }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = () => useContext(LanguageContext);
