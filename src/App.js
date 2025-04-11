import './App.css';

import Activities from '../src/components/Activities';
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import ChairmanAddress from './components/ChairmanAddress';
import Culture from './components/Culture';
import Donation from './components/Donation';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider className="w-full h-full">
      <Header />
      <Hero />
      <Culture />
      <ChairmanAddress />
      <Activities />
      <Donation/>
    </LanguageProvider>
  );
}

export default App;
