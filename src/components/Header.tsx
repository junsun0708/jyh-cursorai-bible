'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image 
            src="/logo.svg"
            alt="로고"
            width={32}
            height={32}
            className="text-blue-600"
          />
          <span className="font-bold text-xl">서비스명</span>
        </div>
        
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#features" className="hover:text-blue-600">기능</Link></li>
            <li><Link href="#pricing" className="hover:text-blue-600">요금제</Link></li>
            <li><Link href="#testimonials" className="hover:text-blue-600">후기</Link></li>
            <li><Link href="#contact" className="hover:text-blue-600">문의하기</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}