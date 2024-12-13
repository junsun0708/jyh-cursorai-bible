'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  image: string
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: '김서연',
      role: '프리랜서',
      company: '디자이너',
      content: 'CursorAI의 코드 제안 기능이 정말 놀랍습니다. 개발 시간이 크게 단축되었고, 코드 품질도 향상되었어요.',
      image: '/images/testimonials/profile1.jpg'
    },
    {
      name: '이준호',
      role: 'CTO',
      company: '테크스타트업',
      content: '팀 전체가 CursorAI를 도입한 후, 개발 생산성이 50% 이상 향상되었습니다. 특히 신입 개발자들의 적응이 빨라졌어요.',
      image: '/images/testimonials/profile2.jpg'
    },
    {
      name: '박지민',
      role: '시니어 개발자',
      company: '핀테크 기업',
      content: 'AI 코드 어시스턴트 중에서 가장 정확하고 유용한 제안을 해줍니다. 실시간 코드 분석 기능이 특히 마음에 들어요.',
      image: '/images/testimonials/profile3.jpg'
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
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">개발자들의 후기</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            CursorAI를 사용하는 개발자들의 실제 경험을 들어보세요.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-600">
                    {item.role} @ {item.company}
                  </p>
                </div>
              </div>
              <blockquote>
                <p className="text-gray-600 italic">"{item.content}"</p>
              </blockquote>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

