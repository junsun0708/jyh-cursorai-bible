'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from 'framer-motion'

export function EmailForm() {
  const [email, setEmail] = useState('')

  return (
    <motion.form 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
      />
      <Button 
        type="submit"
        className="bg-blue-600 text-white hover:bg-blue-700"
      >
        Get Early Access
      </Button>
    </motion.form>
  )
}

