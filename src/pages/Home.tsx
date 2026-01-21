import { useEffect, useState } from "react";
// import heroImg from "@/assets/hero_cyber_horse.jpeg";
import tokenLogo from "@/assets/token_logo.png";
import { Copy, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import MemeSection from "@/components/MemeSection";
import HistorySection from "@/components/HistorySection";
import PolicySection from "@/components/PolicySection";
import HorseYearSection from "@/components/HorseYearSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import RoadmapSection from "@/components/RoadmapSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

interface HomeProps {
  targetSection?: string;
}

export default function Home({ targetSection }: HomeProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to target section when URL changes (e.g., /#/services → scroll to #services)
  useEffect(() => {
    if (targetSection) {
      document.getElementById(targetSection)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [targetSection]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#meme", label: "梗由来" },
    { href: "/#history", label: "历史快进" },
    { href: "/#policy", label: "政策吐槽" },
    { href: "/#token", label: "代币经济" },
    { href: "/#roadmap", label: "路线图" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* 导航栏 */}
      <nav 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? "border-b bg-background/98 backdrop-blur-md shadow-sm" 
            : "border-b border-transparent bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a 
              href="/" 
              className="flex items-center space-x-3 group transition-transform hover:scale-105"
            >
              <div className="relative">
                <img 
                  src={tokenLogo} 
                  alt="马上统一 Logo" 
                  className="w-10 h-10 rounded-full border-2 border-primary/50 shadow-lg group-hover:border-primary transition-colors"
                />
                <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
              </div>
              <span className="text-xl font-black bg-gradient-to-r from-primary via-purple-500 to-amber-500 bg-clip-text text-transparent">
                马上统一
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors rounded-lg hover:bg-muted/50 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary via-purple-500 to-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t animate-in slide-in-from-top duration-200">
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 text-base font-semibold text-foreground/70 hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
      
      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="relative h-[80vh] flex flex-col items-center justify-center text-center p-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="hero_cyber_horse.jpeg" 
              alt="Cyber Horse Hero" 
              className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            {/* Logo */}
            <div className="flex justify-center animate-in fade-in zoom-in duration-1000">
              <div className="relative group">
                <img 
                  src={tokenLogo} 
                  alt="马上统一 Logo" 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-primary/50 shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:border-primary"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-purple-500 to-amber-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
                <div className="absolute inset-0 rounded-full ring-4 ring-primary/20 animate-pulse"></div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-amber-500 animate-in fade-in zoom-in duration-1000 delay-200">
              马上统一
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-muted-foreground animate-in slide-in-from-bottom-4 duration-1000 delay-300">
              不是口号，是时间问题。<br/>
              <span className="text-primary italic">Not “if”, just “when”.</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4 animate-in slide-in-from-bottom-8 duration-1000 delay-500">
              <div className="px-4 py-2 bg-card border rounded-full shadow-lg text-sm font-semibold">
                🐴 马上 = 立刻
              </div>
              <div className="px-4 py-2 bg-card border rounded-full shadow-lg text-sm font-semibold">
                📅 马上 = 马年
              </div>
              <div className="px-4 py-2 bg-card border rounded-full shadow-lg text-sm font-semibold">
                ⏳ 拖得越久，反而越近
              </div>
            </div>
            
            <p className="text-xl md:text-2xl font-black text-white/90 animate-in fade-in zoom-in duration-1000 delay-700 mt-8 bg-primary/40 backdrop-blur-md px-8 py-3 rounded-full border border-primary/50 inline-block shadow-[0_0_30px_rgba(var(--primary),0.5)]">
              🚂 这肯定是历史上最快的共识列车
            </p>

            {/* 发射平台引导组件 */}
            <div className="animate-in slide-in-from-bottom-8 duration-1000 delay-1000 mt-6 max-w-lg mx-auto">
              <div className="bg-background/80 backdrop-blur border border-primary/30 rounded-lg p-4 flex flex-col items-center gap-3 shadow-lg">
                <p className="text-sm font-bold text-primary">
                  🚀 Fair Launch on four.meme
                </p>
                <div className="flex gap-3">
                  <Button 
                    className="gap-2 bg-[#F3BA2F] hover:bg-[#F3BA2F]/90 text-black font-bold"
                    onClick={() => {
                      window.open("https://four.meme/token/0x3e8f5f27d909a9b9be072bd4e5868c883c254444?code=C8UE2M5HJFHN", "_blank");
                    }}
                  >
                    前往 four.meme 抢购
                  </Button>
                  <Button 
                    variant="outline"
                    className="gap-2"
                    onClick={() => {
                      const tokenAddress = "0x3e8f5f27d909a9b9be072bd4e5868c883c254444";
                      navigator.clipboard.writeText(tokenAddress);
                      toast.success("代币地址已复制!");
                    }}
                  >
                    复制代币地址
                  </Button>
                </div>
                <div 
                  className="flex items-center gap-2 px-3 py-2 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted transition-colors group"
                  onClick={() => {
                    const tokenAddress = "0x3e8f5f27d909a9b9be072bd4e5868c883c254444";
                    navigator.clipboard.writeText(tokenAddress);
                    toast.success("代币地址已复制!");
                  }}
                >
                  <span className="text-sm font-bold whitespace-nowrap" style={{ color: '#F3BA2F' }}>CA:</span>
                  <span className="text-xs font-mono text-foreground/80 group-hover:text-foreground transition-colors truncate flex-1 min-w-0">
                    0x3e8f5f27d909a9b9be072bd4e5868c883c254444
                  </span>
                  <Copy className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 态度定义 */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">项目一句话定义</h2>
            <div className="p-8 bg-card border rounded-xl shadow-sm space-y-4">
              <p className="text-xl leading-relaxed">
                「马上统一」不是金融革命，也不拯救世界。<br/>
                它只是把很多人心里已经默认的结局，<br/>
                <span className="font-black text-primary text-2xl">提前写进了区块链。</span>
              </p>
            </div>
          </div>
        </section>

        <MemeSection />
        <HistorySection />
        <PolicySection />
        <HorseYearSection />
        <TokenomicsSection />
        <RoadmapSection />
        <FAQSection />

      </main>
      <Footer />
    </div>
  );
}
