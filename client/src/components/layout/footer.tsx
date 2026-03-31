import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-black text-zinc-500 py-16 border-t border-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="font-serif text-2xl font-bold tracking-wider text-white uppercase flex flex-col leading-none mb-6 group">
              <span className="group-hover:text-primary transition-colors">West Flamborough</span>
              <span className="text-primary text-lg group-hover:text-white transition-colors">Helical Inc.</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed">
              Proud Certified Installer of GoliathTech Helical Piles.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Applications</a></li>
              <li><a href="#technology" className="hover:text-primary transition-colors">Technology</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>Brantford, West Flamborough/Hamilton, St George, Paris</li>
              <li>905-630-1234</li>
              <li>brantford@goliathtechpiles.com</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest font-bold">
          <p>&copy; {new Date().getFullYear()} West Flamborough Helical Inc.</p>
          <p className="mt-2 md:mt-0 opacity-50">Certified Installer of GoliathTech Products</p>
        </div>
      </div>
    </footer>
  );
}
