'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-32">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          CursorAI와 함께 코딩의 미래를 경험하세요
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl mb-8"
        >
          AI 기반 코딩 어시스턴트로 개발 생산성을 높이고 
          프로그래밍의 새로운 가능성을 발견하세요
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
        >
          지금 시작하기
        </motion.button>
      </div>
    </section>
  )
}

