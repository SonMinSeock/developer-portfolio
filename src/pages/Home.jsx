import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/home/Hero';
import Experience from '../components/home/Experience';
import Contact from '../components/home/Contact';
import { scrollToSection } from '../utils/scrollTo';

function Home() {
  const location = useLocation();

  useEffect(() => {
    // URL hash가 있으면 해당 섹션으로 스크롤
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      // DOM이 렌더링된 후 스크롤하도록 setTimeout 사용
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <Experience />
      <Contact />
    </>
  );
}

export default Home;