'use client'

import { motion } from 'framer-motion'
import { VideoBackground } from './VideoBackground'
import { useState } from 'react'

export default function Hero() {
  const [useVideo, setUseVideo] = useState(false);

  return (
    <section className="relative h-screen">
      {useVideo ? (
        <VideoBackground
          src="/videos/hero-background.mp4"
          className="absolute inset-0 z-0"
          fallbackImage="/images/hero-fallback.jpg"
          overlayOpacity="60"
        />
      ) : (
        // 임시 그라데이션 배경
        <div className="absolute inset-0 z-0 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-blue-600 via-blue-800 to-blue-900">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        </div>
      )}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            CursorAI와 함께<br className="hidden md:block" />
            코딩의 미래를 경험하세요
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            AI 기반 코딩 어시스턴트로 개발 생산성을 높이고 
            프로그래밍의 새로운 가능성을 발견하세요
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-x-4"
          >
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              지금 시작하기
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
              더 알아보기
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

