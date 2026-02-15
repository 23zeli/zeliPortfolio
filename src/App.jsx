import { Suspense, lazy } from 'react';
import Header from './Components/Header'

const LandingSection = lazy(() => import("./Components/LandingSection"));
const ProjectSection = lazy(() => import("./Components/ProjectsSection"));
const ContactMe = lazy(() => import("./Components/ContactMe"));
const Footer = lazy(() => import("./Components/Footer"));


function App() {

  return (
    <div className='App'>
      <Header />
      <LandingSection />
      <Suspense fallback={<div>Loading.....</div>}>
        <ProjectSection />
        <ContactMe />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
