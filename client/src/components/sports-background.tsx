"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export function SportsBackground() {
  const { scrollYProgress } = useScroll()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Dynamic background transforms based on scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const fieldRotation = useTransform(scrollYProgress, [0, 1], [0, 360])
  const stadiumScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 z-0">
      {/* Animated Stadium Background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, #10b981 0%, transparent 70%),
            linear-gradient(45deg, #064e3b 25%, transparent 25%),
            linear-gradient(-45deg, #064e3b 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #064e3b 75%),
            linear-gradient(-45deg, transparent 75%, #064e3b 75%)
          `,
          backgroundSize: "100px 100px, 20px 20px, 20px 20px, 20px 20px, 20px 20px",
          scale: stadiumScale,
        }}
        animate={{
          backgroundPosition: [
            "0% 0%, 0px 0px, 0px 0px, 0px 0px, 0px 0px",
            "100% 100%, 20px 20px, -20px 20px, 20px -20px, -20px -20px",
          ],
        }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      {/* Football Field Lines */}
      <motion.div className="absolute inset-0" style={{ rotate: fieldRotation }}>
        {/* Center Circle */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-emerald-500/30 rounded-full"
          style={{ x: "-50%", y: "-50%" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* Goal Posts */}
        <motion.div
          className="absolute top-1/4 left-8 w-4 h-16 bg-emerald-400/40 rounded"
          animate={{ scaleY: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute top-1/4 right-8 w-4 h-16 bg-emerald-400/40 rounded"
          animate={{ scaleY: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
        />
      </motion.div>

      {/* Floating Sports Equipment */}
      <motion.div
        className="absolute w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full shadow-lg"
        style={{
          left: mousePosition.x * 0.1,
          top: mousePosition.y * 0.1,
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      />

      {/* Cricket Stumps */}
      <motion.div className="absolute bottom-20 left-1/4 flex space-x-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1 h-12 bg-amber-400/60 rounded-t"
            animate={{ scaleY: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
          />
        ))}
      </motion.div>

      {/* Dynamic Grass Effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-900/50 to-transparent"
        animate={{
          background: [
            "linear-gradient(to top, rgba(6, 78, 59, 0.5), transparent)",
            "linear-gradient(to top, rgba(16, 185, 129, 0.3), transparent)",
            "linear-gradient(to top, rgba(6, 78, 59, 0.5), transparent)",
          ],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />

      {/* Stadium Lights */}
      <motion.div
        className="absolute top-10 left-10 w-4 h-4 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50"
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute top-10 right-10 w-4 h-4 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50"
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
      />
    </div>
  )
}
