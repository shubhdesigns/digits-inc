'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { RiRobot2Fill } from 'react-icons/ri'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center"
              >
                <RiRobot2Fill className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-2xl font-bold text-gray-900">DIGITS Inc</span>
              </motion.div>
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/services">Our Services</NavLink>
            <NavLink href="/learn">Learning Center</NavLink>
            <NavLink href="/ai-tools">AI Tools</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        className="sm:hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <MobileNavLink href="/about">About Us</MobileNavLink>
          <MobileNavLink href="/services">Our Services</MobileNavLink>
          <MobileNavLink href="/learn">Learning Center</MobileNavLink>
          <MobileNavLink href="/ai-tools">AI Tools</MobileNavLink>
          <MobileNavLink href="/contact">Contact</MobileNavLink>
        </div>
      </motion.div>
    </nav>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
    {children}
  </Link>
)

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
    {children}
  </Link>
)

export default Navbar 