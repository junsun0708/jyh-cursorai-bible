'use client'

import { motion } from 'framer-motion'

function Testimonials() {
  const testimonials = [
    {
      name: '김서연',
      role: '프리랜서 디자이너',
      content: '직관적인 인터페이스와 강력한 기능이 정말 마음에 듭니다.',
      image: '/avatars/1.jpg'
    },
    {
      name: '이준호',
      role: '스타트업 CEO',
      content: '업무 효율이 크게 향상되었습니다. 강력 추천합니다!',
      image: '/avatars/2.jpg'
    },
    {
      name: '박지민',
      role: '마케팅 매니저',
      content: '고객 관리가 훨씬 수월해졌어요. 정말 좋은 솔루션입니다.',
      image: '/avatars/3.jpg'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">고객 후기</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

