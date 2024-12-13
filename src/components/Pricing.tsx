'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  isPopular?: boolean
}

export default function Pricing() {
  const plans: PricingPlan[] = [
    {
      name: "무료 체험",
      price: "0",
      description: "CursorAI를 경험해보세요",
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
      description: "개인 및 소규모 팀을 위한 플랜",
      features: [
        "모든 무료 기능 포함",
        "고급 코드 분석",
        "팀 협업 기능",
        "우선 지원",
        "무제한 사용"
      ],
      isPopular: true
    },
    {
      name: "기업",
      price: "문의",
      description: "대규모 팀을 위한 맞춤형 솔루션",
      features: [
        "모든 프로 기능 포함",
        "맞춤형 통합",
        "전담 지원팀",
        "SLA 보장",
        "기업용 보안"
      ]
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">합리적인 요금제</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            프로젝트 규모와 팀에 맞는 최적의 요금제를 선택하세요
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative ${
                plan.isPopular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                  인기 플랜
                </span>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="text-3xl font-bold">
                  {plan.price === "문의" ? (
                    "문의"
                  ) : (
                    <>
                      ₩{plan.price}
                      <span className="text-base font-normal text-gray-600">/월</span>
                    </>
                  )}
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.isPopular
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {plan.price === "문의" ? "문의하기" : "시작하기"}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

