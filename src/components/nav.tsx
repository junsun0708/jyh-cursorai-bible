'use client'

import Link from 'next/link'
import { Search, ShoppingBag } from 'lucide-react'
import { motion } from 'framer-motion'

export function Nav() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md"
    >
      <div className="flex items-center justify-between px-4 md:px-8 h-12">
        <Link href="/" className="text-xl text-white">
          <svg className="w-5 h-5" viewBox="0 0 13 16">
            <path d="M11.182 7.492c-.018-1.749 1.427-2.589 1.493-2.63-.813-1.190-2.079-1.353-2.531-1.373-1.077-.109-2.103.634-2.652.634-.546 0-1.392-.619-2.287-.602-1.177.017-2.263.684-2.866 1.738-1.223 2.118-.313 5.259.878 6.974.583.842 1.277 1.788 2.187 1.754.877-.035 1.209-.567 2.272-.567 1.062 0 1.362.567 2.291.549.946-.017 1.546-.860 2.124-1.705.669-.978.944-1.926.961-1.974-.021-.009-1.843-.707-1.861-2.807" fill="currentColor"/>
          </svg>
        </Link>
        <div className="hidden md:flex space-x-8 text-sm">
          <Link href="#features" className="text-white/90 hover:text-white">Features</Link>
          <Link href="#community" className="text-white/90 hover:text-white">Community</Link>
          <Link href="#pricing" className="text-white/90 hover:text-white">Pricing</Link>
          <Link href="#support" className="text-white/90 hover:text-white">Support</Link>
        </div>
        <div className="flex items-center space-x-4 text-white">
          <button className="p-2 hover:text-white/80">
            <Search className="w-4 h-4" />
          </button>
          <button className="p-2 hover:text-white/80">
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

