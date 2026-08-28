import { useEffect, useState } from 'react';

import CustomCursor from './components/CustomCursor.jsx';
import AmbientDots from './components/AmbientDots.jsx';

import Intro from './components/Intro.jsx';
import Navbar from './components/Navbar.jsx';
import Founders from './components/Founders.jsx';
import Hero from './components/Hero.jsx';
import SelectedWork from './components/SelectedWork.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import BehindTheEdit from './components/BehindTheEdit.jsx';
import WhyPrimeQuality from './components/WhyPrimeQuality.jsx';
import Social from './components/Social.jsx';
import InquiryForm from './components/InquiryForm.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (entered) {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [entered]);

  return (
    <>
      <CustomCursor />

      {/* Global animated glowing particles */}
      <AmbientDots intro={!entered} />

      <div className="grain-overlay" />
      <div className="vignette" />

      {!entered && (
        <Intro
          onEnter={() => setEntered(true)}
        />
      )}

      {entered && (
        <>
          <a
            className="skip-link"
            href="#work"
          >
            Skip to work
          </a>

          <Navbar />

          <main>
            <Hero />

            <Founders />

            <SelectedWork />

            <Services />

            <Process />

            <BehindTheEdit />

            <WhyPrimeQuality />

            <Social />

            <InquiryForm />

            <FinalCTA />
          </main>

          <Footer />
        </>
      )}
    </>
  );
}