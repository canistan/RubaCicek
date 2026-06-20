import Link from 'next/link';

export function Hero() {
  return (
    <div className="bg-ruba-cream relative border-b border-ruba-earth/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full md:h-[450px]">
          
          {/* Main Banner */}
          <div className="md:col-span-2 relative bg-ruba-dark rounded-sm overflow-hidden flex items-center h-[300px] md:h-full group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-1000"></div>
            <div className="relative z-10 p-8 md:p-12 w-full md:w-3/4">
              <span className="inline-block px-3 py-1 bg-ruba-salmon text-white text-[10px] font-bold uppercase tracking-widest mb-4 rounded-sm">
                Bahar Koleksiyonu
              </span>
              <h1 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-4">
                Doğanın Zarafeti<br />Kapınıza Gelsin
              </h1>
              <p className="text-ruba-cream/80 text-sm md:text-base mb-8 max-w-sm">
                Wabi-Sabi ruhunu taşıyan eşsiz aranjmanlar ve el yapımı çikolatalar.
              </p>
              <Link href="/urunler" className="inline-flex items-center justify-center px-6 py-3 bg-white text-ruba-dark text-sm font-semibold hover:bg-ruba-green hover:text-white transition-colors rounded-sm">
                Hemen Sipariş Ver
              </Link>
            </div>
          </div>

          {/* Side Banners */}
          <div className="grid grid-cols-1 gap-4 h-full">
            <div className="relative bg-ruba-green/30 rounded-sm overflow-hidden flex items-center justify-center p-6 h-[140px] md:h-full group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:scale-105 transition-transform duration-1000"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-xl font-serif text-ruba-dark mb-2">Teraryumlar</h3>
                <Link href="/urunler?kategori=teraryum" className="text-xs font-bold uppercase tracking-wider text-ruba-dark underline underline-offset-4 hover:text-ruba-salmon transition-colors">
                  İncele
                </Link>
              </div>
            </div>
            
            <div className="relative bg-ruba-earth/20 rounded-sm overflow-hidden flex items-center justify-center p-6 h-[140px] md:h-full group">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:scale-105 transition-transform duration-1000"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-xl font-serif text-ruba-dark mb-2">Çikolatalar</h3>
                <Link href="/urunler?kategori=cikolata" className="text-xs font-bold uppercase tracking-wider text-ruba-dark underline underline-offset-4 hover:text-ruba-salmon transition-colors">
                  Keşfet
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
