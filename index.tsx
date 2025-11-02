import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  const [locale, setLocale] = useState<'en' | 'hi'>('en');

  return (
    <div className="min-h-screen bg-background">
      <Navigation locale={locale} />
      <HeroSection locale={locale} />
    </div>
  );
};

export default Index;
