'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Code, Users, Zap } from 'lucide-react'
import { Nav } from './components/nav'
import { EmailForm } from './components/email-form'
import { Button } from "@/components/ui/button"

export default function Page() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      
      <section ref={targetRef} className="pt-12">
        <motion.div 
          style={{ opacity, scale }}
          className="min-h-screen flex flex-col items-center justify-center text-center px-4"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
              Transform your ideas
              <br />
              into reality.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400">
              The ultimate platform for developers and creators.
            </p>
            <div className="py-8">
              <EmailForm />
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-12 relative w-full max-w-2xl aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
            <Image
              src="/placeholder.svg"
              alt="Platform preview"
              fill
              className="object-contain z-10"
            />
          </motion.div>
        </motion.div>
      </section>

      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-400">
              Powerful tools and resources at your fingertips
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm"
              >
                <feature.icon className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-block px-4 py-1 bg-blue-500/10 rounded-full text-blue-400 text-sm mb-4">
              Limited Time Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Get 50% off during our launch period
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join now and receive exclusive early-bird pricing.
              Regular price $99/month, now only $49/month.
            </p>
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="community" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-semibold">
              Join our growing community
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Connect with other developers, share your projects,
              and grow together.
            </p>
            <div className="pt-8">
              <EmailForm />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    title: "Lightning Fast",
    description: "Build and deploy your projects with unprecedented speed and efficiency.",
    icon: Zap
  },
  {
    title: "Developer First",
    description: "Powerful tools and APIs designed specifically for developers' needs.",
    icon: Code
  },
  {
    title: "Community Driven",
    description: "Join a thriving community of developers and creators.",
    icon: Users
  }
]

