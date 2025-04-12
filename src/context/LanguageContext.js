import React, {
  createContext,
  useContext,
  useState,
} from 'react';

// Define translations for English and Korean
const translations = {
  ENG: {
    l1: "privacy policy",
    l2: "Terms of Use",
    l3: "Customer Center Weekdays 08:00~19:00 (Closed on weekends and public holidays)",
    l4: "The Scent of Thought, a non-profit organization",
    l5: "Oh Deok-gyun",
    spanl5: "Chairman",
    l6: "355-82-00129",
    spanl6: "Unique number",
    l7: "3rd floor, Irim Building, 28, Teheran-ro 19-gil, Gangnam-gu Seoul (Yeoksam-dong)",
    spanl7: "address",
    l8: "02-539-5101",
    spanl8: "phone call",
    l9: "070-8668-5091",
    spanl9: "fax",
    l10: "culppy@culppy.com",
    spanl10: "email",
    paragraphFooter:
      "Copyright ⓒ 2025 The Fragrance of Thought. All Rights Reserved",
    h1Footer: "Subscribe to our newsletter",
    h2Footer: "You can quickly receive the latest news, education, and event information from the Scent of Thought through email subscription.",
    buttonFooter: "Apply for email subscription",
    h1Partners: "Together These",
    h1Icon1: "Happy People Co., Ltd.",
    h2Icon1: "We present to you a special day with happy people, a happy day.",
    h1Icon2: "Atrian",
    h2Icon2:
      "A permanent art gallery project proposing a new paradigm for the lifestyle art market.",
    h1Icon3: "Korea Women's Committee",
    h2Icon3: "Great mentors for children, Women are with you.",
    h1Icon4: "Solidarity for the practice of correct comments",
    h2Icon4:
      "We are creating a beautiful society by establishing correct comments.",
    h1Vision: "Efforts to create a better world.",
    h2Vision:
      "We strive to create a community that transcends generations and countries through activities that foster good character and personality and share together. We welcome everyone who needs a little chat and life wisdom.",
    h3Vision:
      " We provide a little help to those who are having a hard time in life. If you have any legal or personal problems that are difficult o solve, please ask Sodam Supporters for help.",
    paragraphVision: " Scheduled for release in June 2025",
    spanVision: "Community APP ‘Sosodamdam’",
    buttonVision: "Download the app",
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
    l1: "개인정보 처리방침",
    l2: "이용약관",
    l3: "고객센터 평일 08:00~19:00 (주말 및 공휴일 휴무)",
    l4: "사단법인 사색의향기",
    l5: "오덕균",
    spanl5: "이사장",
    l6: "355-82-00129",
    spanl6: "고유번호",
    l7: "서울시 강남구 테헤란로 19길 28 이림빌딩3층(역삼동)",
    spanl7: "주소",
    l8: "02-539-5101",
    spanl8: "전화",
    l9: "070-8668-5091",
    spanl9: "팩스",
    l10: "culppy@culppy.com",
    spanl10: "이메일",
    paragraphFooter: "Copyright ⓒ 2025 사색의향기. All Rights Reserved",
    h1Footer: "뉴스레터 구독하기",
    h2Footer: "이메일 구독을 통해 사색의향기의 최신 소식과 교육 및 이벤트 소식을빠르게 받아보실 수 있습니다.",
    buttonFooter: "이메일 구독신청",
    h1Partners: "함께하는이들",
    h1Icon1: "(주)행복한사람들",
    h2Icon1: "행복한 날, 행복한 사람들과 함께하는 특별한 날을 선사합니다.",
    h1Icon2: "바른댓글 실천연대",
    h2Icon2: "바른댓글 정착으로 아름다운 사회를 만들어갑니다.",
    h1Icon3: "아트리안",
    h2Icon3: "생활미술시장의 뉴 패러다임을 제안하는 상설 아트갤러리 프로젝트.",
    h1Icon4: "대한민국위멘위원회",
    h2Icon4: "어린이를 위한 위대한 멘토, 위멘이함께 합니다.",
    h1Vision: "더 나은 세상을 만들어 가기 위한 노력.",
    h2Vision:
      "바른 인성과 성품을 고양하며 함께 나누는 활동을 통해 세대와 나라를 초월한 커뮤니티를 만들어나가려고 노력하고 있습니다. 작은 담소와 삶의 지혜가 필요하신 모든 분들을 환영합니다. ",
    h3Vision:
      "삶의 어려운 고충이 있으신 분들에게 작은 도움을 드립니다. 법률적이거나 개인적으로 해결하기 어려운 문제들이 있으시다면 소담 서포터즈에게 도움을 요청해주세요. ",
    paragraphVision: " 2025. 6. 출시 예정",
    spanVision: "커뮤니티 APP ‘소소담담’",
    buttonVision: "앱 다운로드",
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
