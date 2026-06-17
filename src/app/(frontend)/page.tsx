export default function Home() {
  return (
    <main className="flex-grow flex flex-col items-center">
      {/* Top Bar Placeholder */}
      <div className="w-full bg-ruba-green text-ruba-cream text-center text-sm py-2">
        🌿 Her Gün Aynı Gün Teslimat | İletişim: iletisim@ruba.com
      </div>

      {/* Header Placeholder */}
      <header className="w-full px-6 py-4 flex justify-between items-center border-b border-ruba-earth/20 bg-ruba-cream">
        <div className="text-3xl font-serif text-ruba-dark">Ruba</div>
        <nav className="space-x-6 text-sm">
          <a href="#" className="hover:text-ruba-salmon transition">Çiçek</a>
          <a href="#" className="hover:text-ruba-salmon transition">Sevgiliye</a>
          <a href="#" className="hover:text-ruba-salmon transition">Amaca Göre</a>
          <a href="#" className="hover:text-ruba-salmon transition">Butik & Çikolata</a>
        </nav>
        <div className="space-x-4 text-sm">
          <a href="#" className="hover:text-ruba-salmon">Sipariş Takibi</a>
          <a href="#" className="hover:text-ruba-salmon">Üye Girişi</a>
          <a href="#" className="hover:text-ruba-salmon">Sepet (0)</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center py-24 text-center px-4 bg-gradient-to-b from-ruba-cream to-[#eae3d5]">
        <h1 className="text-5xl md:text-6xl font-serif text-ruba-dark mb-4">
          🌿 Ruba: Her buket biraz rüya.
        </h1>
        <p className="text-lg text-ruba-dark/80 mb-10 max-w-2xl font-light">
          Tatlı anlara zarif dokunuşlar. Ruba: Çiçekle başlar, tatla tamamlanır.
        </p>
        
        {/* Search Module Placeholder */}
        <div className="bg-white p-2 rounded-full shadow-lg flex items-center max-w-xl w-full border border-ruba-earth/20">
          <input 
            type="text" 
            placeholder="Nereye göndermek istersiniz? (İl/İlçe/Semt)" 
            className="flex-grow bg-transparent px-4 py-3 outline-none text-ruba-dark"
          />
          <button className="bg-ruba-dark text-white px-8 py-3 rounded-full hover:bg-ruba-earth transition font-medium">
            Ara
          </button>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="w-full py-8 border-y border-ruba-earth/20 bg-white flex justify-center gap-12 text-sm text-ruba-dark font-medium">
        <span className="flex items-center gap-2">🚚 Her Gün Aynı Gün Teslimat</span>
        <span className="flex items-center gap-2">⭐ %100 Müşteri Memnuniyeti</span>
        <span className="flex items-center gap-2">🔒 Güvenli Alışveriş</span>
      </section>

      {/* Footer Placeholder */}
      <footer className="w-full bg-ruba-dark text-ruba-cream py-12 px-6 mt-auto text-center">
        <div className="font-serif text-2xl mb-4">Ruba Çiçekçilik</div>
        <p className="mb-2">🌿 Güzel anların yuvası. / Bir demet, bir kutu, bin teşekkür.</p>
        <p className="text-sm text-ruba-cream/70">Bulgurlu, Toygar Çeşme Sk. No:14A, 34696 Üsküdar/İstanbul</p>
      </footer>
    </main>
  );
}
