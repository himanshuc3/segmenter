import Navbar from './components/Navbar'
import { LandingSection, GallerySection, ContributorsSection } from './components/Sections'

import './normalization.css'
import './styles/global.scss'
import './index.scss'

function App() {
  return (
    <div id="segmenter-root">
      <Navbar />
      <LandingSection />
      <GallerySection />
      <ContributorsSection />
      <p className='copyright-text'>Made with 💜 <span>/</span> stackoverflow threads</p>
    </div>
  );
}

export default App;
