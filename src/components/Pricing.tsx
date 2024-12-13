'use client'

import { motion } from 'framer-motion'

export default function Pricing() {
  const plans = [
    {
      name: "무료 체험",
      price: "0",
      features: [
        "기본 코드 완성",
        "실시간 제안",
        "커뮤니티 접근",
        "14일 무료 체험"
      ]
    },
    {
      name: "프로",
      price: "19,900",
      features: [
        "모든 무료 기능 포함",
        "고급 코드 분석",
        "팀 협업 기능",
        "우선 지원"
      ]
    },
    {
      name: "기업",
      price: "문의",
      features: [
        "모든 프로 기능 포함",
        "맞춤형 통합",
        "전담 지원팀",
        "SLA 보장"
      ]
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">요금제</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">
                {plan.price === "문의" ? "문의" : `₩${plan.price}`}
                {plan.price !== "문의" && <span className="text-sm">/월</span>}
              </p>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                시작하기
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

