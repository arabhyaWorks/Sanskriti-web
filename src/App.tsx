import React from 'react';
const bgImg = new URL('./assets/bgImg.png', import.meta.url).href;
const mobileBg = new URL('./assets/mobilebg.png', import.meta.url).href;
const border = new URL('./assets/border.svg', import.meta.url).href;
import TopBar from './components/TopBar';
import Header from './components/Header';
import VideoSlideshow from './components/VideoSlideshow';
import CulturalSections from './components/CulturalSections';
import Events from './components/Events';
import ArtistRegistration from './components/ArtistRegistration';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <TopBar />
      <div 
        className="min-h-screen bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: `url(${mobileBg})` 
        }}
      >
        <style>{`
          @media (min-width: 768px) {
            .min-h-screen {
              background-image: url(${bgImg}) !important;
            }
          }
        `}</style>
        <Header />
        <div className="relative">
          <VideoSlideshow />
          <img 
            src={border} 
            alt="" 
            className="w-full h-auto"
            aria-hidden="true"
          />
        </div>
        {/* <CulturalSections /> */}
        <Events />
        <ArtistRegistration />
        <Footer />
      </div>
    </>
  );
}

export default App;