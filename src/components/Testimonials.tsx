'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const testimonials = [
  { name: 'John Doe', role: 'Frontend Developer', content: 'This platform has revolutionized my workflow.' },
  { name: 'Jane Smith', role: 'UX Designer', content: 'The tools provided are simply amazing.' },
  { name: 'Mike Johnson', role: 'Full Stack Developer', content: 'I've never been more productive.' },
]

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="testimonials" className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

