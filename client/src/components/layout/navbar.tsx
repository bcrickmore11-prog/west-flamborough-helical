import { Link } from "wouter";
import { Menu, Phone, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#services", label: "Applications" },
    { href: "#technology", label: "Technology" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b shadow-sm py-2"
          : "bg-white/90 py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl md:text-2xl font-bold tracking-tighter text-black hover:opacity-80 transition-opacity uppercase flex flex-col leading-none group">
          <span className="group-hover:text-primary transition-colors">West Flamborough</span>
          <span className="text-primary text-sm md:text-base tracking-widest group-hover:text-black transition-colors">Helical Inc.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
           <div className="flex items-center gap-2 px-3 py-1 bg-zinc-100 rounded-sm">
             <CheckCircle2 className="w-4 h-4 text-primary" />
             <span className="text-xs font-bold uppercase tracking-wider text-zinc-700">Certified GoliathTech Installer</span>
           </div>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold uppercase tracking-wider text-zinc-600 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button variant="default" size="sm" className="font-bold uppercase tracking-wider bg-primary hover:bg-primary/90 text-white border-none rounded-none">
            <Phone className="mr-2 h-4 w-4" /> Get a Quote
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-10">
                <div className="flex items-center gap-2 px-3 py-2 bg-zinc-100 rounded-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-700">Certified GoliathTech Installer</span>
                </div>
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-lg font-bold uppercase tracking-wider hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button className="w-full font-bold uppercase bg-primary hover:bg-primary/90 rounded-none">Get a Quote</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
