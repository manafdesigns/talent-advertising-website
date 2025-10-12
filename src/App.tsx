import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { ThemeProvider } from './components/ThemeProvider';
import { FaWhatsapp } from 'react-icons/fa';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AllProject from './pages/AllProjects';


export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
          <div className="size-full max-w-full overflow-x-hidden">
            <Navigation />
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
            <Toaster />
            {/* WhatsApp Floating Button */}
            <a
              href="https://wa.me/9562018781"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 z-50"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp className="w-14 h-14 p-3 bg-primary text-white rounded-full shadow-lg" />
            </a>
          </div>
            }
          />
          <Route path="/projects" element={<AllProject />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
