import React, {
  createContext,
  useContext,
  useState,
} from 'react';

// Define translations for English and Korean
const translations = {
  ENG: {
    h1Donation: "If you would like to send your warm heart through donation,",
    h2Donation: "Sponsorship account information",
    paragraphDonation:
      "Citizen 924501-01-351204 / The Scent of Thought, a non-profit organization",
    button1: "regular sponsorship",
    button2: "One-time donation",
    chairman: "Chairman Oh Deok-gyun",
    director: "Director Jeong Jun-ho",
    advisor: "Advisor Kwon Hyeok-jun",
    introduction: "Introduction",
    sosodamdamAPP: "Sosodamdam APP",
    activity: "Activity",
    paragraphHeader: "the shape of thought",
    languageToggle: "KOR",
    h1Hero: "special sharing",
    h2Hero: "Precious changes made by a heart that is together",
    paragraphHero: "A touching moment of joy and sharing",
    h1Culture: "We are creating a new culture of sharing.",
    h2Culture: "we are",
    h3Culture: "It is the fragrance of thought.",
    paragraphCulture:
      "The Scent of Thought is a community of literary figures and a non-profit organization that strives to contribute to society through 'sharing a happy culture' and to create an advanced and sound social culture.",
    h1Chairman: "Chairman's greeting.",
    h2Chairman: "Oh Deok-gyun, Chairman of the Sasaekhyanggi Foundation",
    h3Chairman: "More interviews",
    paragraphChairman:
      "Hello, I am Oh Deok-gyun, the CEO of Sasaekuihyanggi.The fragrance of thought has been working to create a better society through ‘sharing a happy culture.’ We will continue to share the values ​​of literature and humanities and grow together as an open community. I ask for your interest and support. Thank you.",
  },
  KOR: {
    h1Donation: "기부를 통해 따뜻한 마음을 보내고 싶다면,",
    h2Donation: "후원계좌 안내",
    paragraphDonation: "국민 924501-01-351204 / 사단법인 사색의향기",
    button1: "정기 후원",
    button2: "일시 후원",
    chairman: "오덕균 이사장",
    director: "정준호 이사",
    advisor: "권혁준 고문",
    introduction: "소개",
    sosodamdamAPP: "소소담담 APP",
    activity: "활동",
    paragraphHeader: "사색의형기",
    languageToggle: "ENG",
    h1Hero: "특별한 나눔",
    h2Hero: "함께하는 마음이 만드는 소중한 변화",
    paragraphHero: "즐거움과 나눔이 있는 감동의 순간",
    h1Culture: "새로운 문화 나눔을 만들어갑니다.",
    h2Culture: "우리는",
    h3Culture: "사색의향기입니다.",
    paragraphCulture:
      "사색의향기는 문학인들의 커뮤니티로서 '행복한 문화 나눔'을 통한 사회 공헌과 선진적이고 건전한 사회 문화를 만들어나가기 위해 노력하는 비영리 단체입니다.",
    h1Chairman: "이사장 인사말.",
    h2Chairman: "사단법인 사색의향기  이사장 오덕균",
    h3Chairman: "인터뷰 더 보기",
    paragraphChairman:
      "안녕하세요, 사색의향기 이사장 오덕균 입니다. 사색의향기는 ‘행복한 문화 나눔’을 통해 더 나은 사회를 만들어가고자노력해왔습니다.앞으로도 문학과 인문학의 가치를 공유하며, 열린 커뮤니티로서 함께 성장하겠습니다.많은 관심과 응원 부탁드립니다.감사합니다.",
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
