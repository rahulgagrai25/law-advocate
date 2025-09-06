<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap"
  rel="stylesheet"
/>
import AboutPage from "./components/About";
import ContactPage from "./components/Contact";
import EducationPage from "./components/Education";
import ExperiencePage from "./components/Experience";
import Footer from "./components/Footer";
import HeroPage from "./components/Hero";
import Navbar from "./components/Navbar";
import NewsUpdatesPage from "./components/News";
import PublicationsPage from "./components/Publication";
import SkillsPage from "./components/Skills";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <HeroPage/>
        <AboutPage/>
        <ExperiencePage/>
        <EducationPage/>
        <PublicationsPage/>
        <SkillsPage/>
        <NewsUpdatesPage/>
        <ContactPage/>
        <Footer/>
        {children}
      </body>
    </html>
  );
}
