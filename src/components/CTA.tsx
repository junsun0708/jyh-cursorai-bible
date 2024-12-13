'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800" />
      
      {/* 장식용 패턴 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            AI와 함께하는 새로운 코딩 경험을 시작하세요
          </h2>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            지금 가입하시면 14일 동안 프로 버전을 무료로 체험하실 수 있습니다.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <div className="relative w-full md:w-auto flex-1 max-w-md">
              <input
                type="email"
                placeholder="이메일을 입력하세요"
                className="w-full px-6 py-3 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <button className="w-full md:w-auto px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 group">
              무료로 시작하기
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-sm text-blue-100"
          >
            가입 즉시 무료 체험이 시작됩니다. 언제든 해지하실 수 있습니다.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

