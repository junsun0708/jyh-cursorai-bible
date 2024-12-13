'use client'

import { motion } from 'framer-motion'

export default function Features() {
  const features = [
    {
      title: "쉽고 직관적인 사용",
      description: "복잡한 설정 없이 바로 시작할 수 있는 간단한 인터페이스를 제공합니다."
    },
    {
      title: "실시간 코드 어시스트",
      description: "AI가 실시간으로 코드를 분석하고 최적의 제안을 제공합니다."
    },
    {
      title: "다양한 언어 지원",
      description: "Python, JavaScript, TypeScript 등 다양한 프로그래밍 언어를 지원합니다."
    },
    {
      title: "커뮤니티 지원",
      description: "활발한 개발자 커뮤니티에서 지식을 공유하고 성장할 수 있습니다."
    }
  ]

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">주요 기능</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

