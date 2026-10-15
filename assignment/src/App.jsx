import { ToastProvider } from './context/ToastContext.jsx';
import Header from './components/sections/Header.jsx';
import Hero from './components/sections/Hero.jsx';
import OpportunitySection from './components/sections/OpportunitySection.jsx';
import ResumeUpload from './components/sections/ResumeUpload.jsx';
import CollegesSection from './components/sections/CollegesSection.jsx';
import EmployersSection from './components/sections/EmployersSection.jsx';
import AppShowcase from './components/sections/AppShowcase.jsx';
import DownloadApp from './components/sections/DownloadApp.jsx';
import SupportCard from './components/sections/SupportCard.jsx';
import Footer from './components/sections/Footer.jsx';

export default function App() {
  return (
    <ToastProvider>
      <Header />
      <main id="top">
        <Hero />
        <OpportunitySection />
        <ResumeUpload />
        <CollegesSection />
        <EmployersSection />
        <section className="app" id="app">
          <AppShowcase />
          <DownloadApp />
        </section>
        <SupportCard />
      </main>
      <Footer />
    </ToastProvider>
  );
}
