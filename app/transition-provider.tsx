"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
