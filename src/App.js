import './App.css';

import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import ChairmanAddress from './components/ChairmanAddress';
import Culture from './components/Culture';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider className="w-full h-full">
      <Header />
      <Hero />
      <Culture />
      <ChairmanAddress/>
    </LanguageProvider>
  );
}

export default App;
