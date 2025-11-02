import { Button } from "@/components/ui/button";
import phoneDesign from "@/assets/phone-design.svg";
import scrollIndicator from "@/assets/scroll.svg";

interface HeroSectionProps {
  locale?: 'en' | 'hi';
}

const translations = {
  en: {
    tagline: "TRADE SMARTER | UPGRADE FASTER",
    upgrade: "Upgrade",
    heading: " your Digital World with ",
    smartValue: "Smart Value",
    description: "Say goodbye to old devices and hello to cutting-edge technology. At Smart Value, we make it simple for you to trade in your old device and trade up to something new—all in one convenient place.",
    scheduleDemo: "Schedule a Demo",
    contactSales: "Contact Sales",
    scrollDown: "Scroll down"
  },
  hi: {
    tagline: "स्मार्ट तरीके से व्यापार करें | तेज़ी से अपग्रेड करें",
    upgrade: "अपग्रेड करें",
    heading: " अपनी डिजिटल दुनिया ",
    smartValue: "स्मार्ट वैल्यू के साथ",
    description: "पुराने उपकरणों को अलविदा कहें और अत्याधुनिक तकनीक को नमस्ते। स्मार्ट वैल्यू में, हम आपके लिए अपने पुराने उपकरण को व्यापार करना और कुछ नया अपग्रेड करना आसान बनाते हैं।",
    scheduleDemo: "डेमो शेड्यूल करें",
    contactSales: "बिक्री से संपर्क करें",
    scrollDown: "नीचे स्क्रॉल करें"
  }
};

const HeroSection = ({ locale = 'en' }: HeroSectionProps) => {
  const t = translations[locale];
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Main content container */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 py-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <p className="text-cyan-light font-bold text-sm lg:text-base tracking-wider">
              {t.tagline}
            </p>
            
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-[1.2]">
              <span className="bg-gradient-to-r from-[#C0FF3A] to-[#00B2FF] bg-clip-text text-transparent block">
                {t.upgrade}
              </span>
              <span className="text-white block">{t.heading}</span>
              <span className="text-coral block">{t.smartValue}</span>
            </h1>
            
            <p className="text-white/90 text-base lg:text-lg max-w-xl leading-relaxed" style={{ fontFamily: 'Poppins', fontWeight: 500 }}>
              {t.description}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-white text-background hover:bg-white/90 font-bold rounded-full px-8"
              >
                {t.scheduleDemo}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-background font-bold rounded-full px-8"
              >
                {t.contactSales}
              </Button>
            </div>
          </div>
          
          {/* Right content - Phone visual */}
          <div className="relative flex justify-center lg:justify-end items-center">
            {/* 
              IMPORTANT: Manually adjust phone SVG scale and position below:
              
              To adjust SIZE - modify these classes on the <img> tag:
              - Current: max-w-2xl (change to max-w-xl for smaller, max-w-3xl for larger)
              - Add scale-[1.2] or scale-[0.9] to fine-tune size
              
              To adjust POSITION - add these transform classes to the <img> tag:
              - Move horizontally: translate-x-8 (right) or -translate-x-8 (left)
              - Move vertically: -translate-y-8 (up) or translate-y-8 (down)
              
              Example: className="w-full max-w-2xl h-auto scale-110 translate-x-4"
            */}
            <img 
              src={phoneDesign} 
              alt="Smart devices"
              className="w-full max-w-2xl h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <img src={scrollIndicator} alt="" className="w-16 h-16" />
        <p className="text-[#C0FF3A] text-sm" style={{ fontFamily: 'Poppins', fontWeight: 500 }}>{t.scrollDown}</p>
      </div>
    </section>
  );
};

export default HeroSection;
