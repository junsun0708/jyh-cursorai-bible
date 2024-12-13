'use client'

import { motion } from 'framer-motion'
import { 
  Code2, 
  Cpu, 
  Globe2, 
  Users,
  LucideIcon 
} from 'lucide-react'

interface FeatureCard {
  title: string
  description: string
  icon: JSX.Element
}

export default function Features() {
  const features: FeatureCard[] = [
    {
      title: "쉽고 직관적인 사용",
      description: "복잡한 설정 없이 바로 시작할 수 있는 간단한 인터페이스를 제공합니다.",
      icon: <Code2 className="w-8 h-8 text-blue-500" />
    },
    {
      title: "실시간 코드 어시스트",
      description: "AI가 실시간으로 코드를 분석하고 최적의 제안을 제공합니다.",
      icon: <Cpu className="w-8 h-8 text-blue-500" />
    },
    {
      title: "다양한 언어 지원",
      description: "Python, JavaScript, TypeScript 등 다양한 프로그래밍 언어를 지원합니다.",
      icon: <Globe2 className="w-8 h-8 text-blue-500" />
    },
    {
      title: "커뮤니티 지원",
      description: "활발한 개발자 커뮤니티에서 지식을 공유하고 성장할 수 있습니다.",
      icon: <Users className="w-8 h-8 text-blue-500" />
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
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">주요 기능</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            CursorAI는 개발자의 생산성을 높이고 코딩 경험을 향상시키는 다양한 기능을 제공합니다.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

