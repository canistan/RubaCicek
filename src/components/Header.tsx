import Link from 'next/link';
import { CartButton } from '@/components/CartButton';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-ruba-earth/20 transition-all duration-300">
      {/* Top Notification Bar */}
      <div className="bg-ruba-dark text-ruba-cream text-xs py-2 text-center font-medium tracking-wide">
        İstanbul İçi Aynı Gün Ücretsiz Teslimat | Özel Gün Siparişlerinizi Şimdiden Verin
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile Menu Button (Placeholder) */}
          <div className="flex items-center md:hidden">
            <button className="text-ruba-dark p-2 -ml-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center flex-1 md:flex-none">
            <Link href="/" className="font-serif text-4xl text-ruba-dark tracking-tight hover:text-ruba-green transition-colors">
              Ruba
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 lg:space-x-12">
            <Link href="/" className="text-ruba-dark hover:text-ruba-salmon transition-colors font-medium text-[13px] tracking-wider uppercase">
              Ana Sayfa
            </Link>
            <Link href="/urunler" className="text-ruba-dark hover:text-ruba-salmon transition-colors font-medium text-[13px] tracking-wider uppercase">
              Tüm Ürünler
            </Link>
            <Link href="/urunler?kategori=aranjman" className="text-ruba-dark hover:text-ruba-salmon transition-colors font-medium text-[13px] tracking-wider uppercase">
              Aranjman
            </Link>
            <Link href="/urunler?kategori=cikolata" className="text-ruba-dark hover:text-ruba-salmon transition-colors font-medium text-[13px] tracking-wider uppercase">
              Çikolata
            </Link>
            <Link href="/atolyeler" className="text-ruba-dark hover:text-ruba-salmon transition-colors font-medium text-[13px] tracking-wider uppercase">
              Atölyeler
            </Link>
          </nav>
          
          {/* Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="text-ruba-dark hover:text-ruba-green transition-colors p-2 hidden sm:block">
              <span className="sr-only">Arama</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
            </button>
            <button className="text-ruba-dark hover:text-ruba-green transition-colors p-2 hidden sm:block">
              <span className="sr-only">Hesabım</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
            </button>
            <CartButton />
          </div>

        </div>
      </div>
    </header>
  );
}
