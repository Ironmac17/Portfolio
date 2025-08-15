"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export function ScrollTriggerAnimations() {
  const { scrollYProgress } = useScroll()
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 })

  // Football kick animation
  const footballX = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 200, 400, 600, 800, 1000])
  const footballY = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, -100, -200, -150, -50, 0])

  // Cricket ball trajectory
  const cricketX = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [100, 300, 700, 900])
  const cricketY = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [50, -150, -100, 50])

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      // Create ripple effect on scroll
      if (latest > 0.1) {
        setBallPosition({
          x: Math.sin(latest * 10) * 50,
          y: Math.cos(latest * 10) * 30,
        })
      }
    })
    return unsubscribe
  }, [scrollYProgress])

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {/* Football Kick Animation */}
      <motion.div
        className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 shadow-lg"
        style={{
          x: footballX,
          y: footballY,
          left: "10%",
          top: "60%",
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
        }}
      >
        {/* Football pattern */}
        <div className="absolute inset-2 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-0.5 h-6 bg-white transform -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      {/* Cricket Ball Animation */}
      <motion.div
        className="absolute w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-800 shadow-lg"
        style={{
          x: cricketX,
          y: cricketY,
          right: "10%",
          top: "40%",
        }}
        animate={{
          rotate: [0, -360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          rotate: { duration: 0.8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
        }}
      >
        {/* Cricket ball seam */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white transform -translate-y-1/2" />
        <div className="absolute top-1/4 left-1/4 right-1/4 h-0.5 bg-white" />
        <div className="absolute bottom-1/4 left-1/4 right-1/4 h-0.5 bg-white" />
      </motion.div>

      {/* Goal Net Effect */}
      <motion.div
        className="absolute right-10 top-1/3 w-32 h-24 border-2 border-emerald-400/50"
        style={{
          background: `
            linear-gradient(90deg, transparent 48%, #10b981 49%, #10b981 51%, transparent 52%),
            linear-gradient(0deg, transparent 48%, #10b981 49%, #10b981 51%, transparent 52%)
          `,
          backgroundSize: "8px 8px",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      />

      {/* Scroll Progress Ball Trail */}
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500"
        style={{
          left: "50%",
          top: "20%",
          x: ballPosition.x,
          y: ballPosition.y,
          scale: useTransform(scrollYProgress, [0, 1], [0.5, 1.5]),
        }}
        animate={{
          boxShadow: ["0 0 20px #10b981", "0 0 40px #3b82f6", "0 0 20px #10b981"],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      />

      {/* Stadium Crowd Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-4 bg-gradient-to-t from-emerald-600/30 to-transparent"
            style={{ left: `${i * 5}%`, height: "60px" }}
            animate={{
              scaleY: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
    </div>
  )
}
