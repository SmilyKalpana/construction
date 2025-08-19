'use client'
import { useState } from 'react'
import Image from 'next/image'
import { images } from '../../../assets/assets'
import { AlignJustify } from 'lucide-react'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const menuItems = [
    { path: "#home", label: "Home" },
    { path: "#about", label: "About" },
    { path: "#services", label: "Services" },
    { path: "#contact", label: "Contact" },
  ]

  return (
    <nav className="w-full h-24 overflow-hidden sticky top-0 z-50">
      {/* Animated backgrounds */}
      <div className="absolute inset-0 bg-diagonal-1 animate-left-right"></div>
      <div className="absolute inset-0 bg-diagonal-2 animate-right-left"></div>

      {/* Navbar content */}
      <div className="relative flex justify-between items-center h-full px-4 sm:px-10 md:px-20">
        {/* Logo */}
        <a href="/">
          <Image src={images.logo} alt="Logo" className="w-20 sm:w-24 md:w-28" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex flex-row gap-6 text-gray-200 tracking-wide font-medium capitalize">
          {menuItems.map((item, index) => (
            <li key={index} className='hover:border-b-2'>
              <a href={item.path}>{item.label}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="sm:hidden cursor-pointer" onClick={() => setShowMenu(true)}>
          <AlignJustify className="h-6 w-6 text-gray-200" />
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed top-0 right-0 h-full bg-white transition-all duration-300 ease-in-out overflow-hidden ${showMenu ? 'w-64' : 'w-0'}`}>
          <div className="flex flex-col p-4">
            {/* Close Button */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600 font-medium" onClick={() => setShowMenu(false)}>Back</p>
              <div className="cursor-pointer" onClick={() => setShowMenu(false)}>
                <AlignJustify className="h-6 w-6 text-gray-600 rotate-180" />
              </div>
            </div>

            {/* Menu Items */}
            <ul className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <li key={index} onClick={() => setShowMenu(false)} className="hover:text-primary">
                  <a href={item.path}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
