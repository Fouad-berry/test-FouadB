'use client';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css'
import Image from 'next/image';
import logo from '../../Images/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          <div className="flex-shrink-0 text-2xl font-bold logo-text">
            <Image src={logo} width={150} height={150} alt='Logo' />
          </div>

          <div className="hidden md:flex md:space-x-8 nav-link">
            <Link href="/" className="text-gray-600 nav-link">Notre service</Link>
            <Link href="/about" className="text-gray-600 nav-link">Ressources</Link>
            <Link href="/services" className="text-gray-600 nav-link">Contact</Link>
          </div>

          <div className="hidden md:block">
            <button className="contact-button text-white px-4 py-2 rounded-md">
              Parler à un conseiller
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <Menu className="text-gray-700" />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block text-gray-600 nav-link">Notre service</Link>
            <Link href="/about" className="block text-gray-600 nav-link">Ressources</Link>
            <Link href="/services" className="block text-gray-600 nav-link">Contact</Link>
            <button className="w-full contact-button text-white px-4 py-2 rounded-md">
            Parler à un conseiller
            </button>
          </div>
        )}

      </div>
    </nav>
  );
}
