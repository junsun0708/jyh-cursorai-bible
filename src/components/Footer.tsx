'use client'

import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  제품: [
    { name: '기능', href: '#features' },
    { name: '요금제', href: '#pricing' },
    { name: '고객 후기', href: '#testimonials' },
    { name: '업데이트', href: '#' },
  ],
  회사: [
    { name: '소개', href: '#' },
    { name: '블로그', href: '#' },
    { name: '채용', href: '#' },
    { name: '문의하기', href: '#contact' },
  ],
  리소스: [
    { name: '문서', href: '#' },
    { name: '가이드', href: '#' },
    { name: '커뮤니티', href: '#' },
    { name: 'API', href: '#' },
  ],
  법적사항: [
    { name: '이용약관', href: '#' },
    { name: '개인정보처리방침', href: '#' },
    { name: '쿠키 정책', href: '#' },
  ],
}

const socialLinks = [
  { name: 'Github', icon: Github, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Email', icon: Mail, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* 상단 섹션 */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* 로고 및 설명 */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image 
                src="/logo.svg"
                alt="CursorAI"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-white">CursorAI</span>
            </Link>
            <p className="text-sm text-gray-400">
              AI 기반 코딩 어시스턴트로 개발 생산성을 높이고 
              프로그래밍의 새로운 가능성을 발견하세요.
            </p>
          </div>

          {/* 링크 섹션 */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 뉴스레터 */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="text-white font-semibold mb-4">뉴스레터 구독</h3>
            <p className="text-sm text-gray-400 mb-4">
              새로운 기능과 업데이트 소식을 가장 먼저 받아보세요.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="이메일 주소"
                className="flex-1 px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                구독하기
              </button>
            </div>
          </div>
        </div>

        {/* 하단 섹션 */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">
            © 2024 CursorAI. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

