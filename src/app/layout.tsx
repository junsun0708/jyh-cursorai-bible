import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CursorAI - AI 기반 코딩 어시스턴트',
  description: 'AI 기반 코딩 어시스턴트로 개발 생산성을 높이고 프로그래밍의 새로운 가능성을 발견하세요.',
  keywords: ['AI', '코딩', '개발', '프로그래밍', '생산성', '자동완성'],
  openGraph: {
    title: 'CursorAI - AI 기반 코딩 어시스턴트',
    description: 'AI 기반 코딩 어시스턴트로 개발 생산성을 높이고 프로그래밍의 새로운 가능성을 발견하세요.',
    url: 'https://cursorai.com',
    siteName: 'CursorAI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CursorAI Preview',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CursorAI - AI 기반 코딩 어시스턴트',
    description: 'AI 기반 코딩 어시스턴트로 개발 생산성을 높이고 프로그래밍의 새로운 가능성을 발견하세요.',
    images: ['/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#3B82F6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

