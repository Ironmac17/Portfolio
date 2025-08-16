"use client"

import type React from "react"

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Zap, Trophy, Star } from "lucide-react"

export function InteractiveSportsElements() {
  const [clickedBalls, setClickedBalls] = useState<{ id: number; x: number; y: number }[]>([])
  const [score, setScore] = useState(0)
  const [showScorePopup, setShowScorePopup] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 100, damping: 15 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 15 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const handleBallClick = (ballId: number, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2

    setClickedBalls((prev) => [...prev, { id: Date.now(), x, y }])
    setScore((prev) => prev + 10)
    setShowScorePopup(true)

    setTimeout(() => setShowScorePopup(false), 1000)
    setTimeout(() => {
      setClickedBalls((prev) => prev.filter((ball) => ball.id !== Date.now()))
    }, 2000)
  }

  return (
    <>
      {/* Mouse follower effect */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-primary/30 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Interactive floating balls */}
      <motion.div
        className="fixed top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full cursor-pointer shadow-2xl z-40"
        whileHover={{ scale: 1.2, rotate: 180 }}
        whileTap={{ scale: 0.8 }}
        onClick={(e) => handleBallClick(1, e)}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{
          y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
        }}
        style={{
          boxShadow: "0 0 40px rgba(251, 146, 60, 0.5)",
        }}
      >
        <div className="absolute inset-2 border-2 border-white rounded-full opacity-80" />
        <div className="absolute top-1/2 left-1/2 w-8 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-0.5 h-8 bg-white transform -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      <motion.div
        className="fixed top-1/3 right-1/4 w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-full cursor-pointer shadow-2xl z-40"
        whileHover={{ scale: 1.3, rotate: -180 }}
        whileTap={{ scale: 0.7 }}
        onClick={(e) => handleBallClick(2, e)}
        animate={{
          x: [0, 30, 0],
          rotate: [0, -360],
        }}
        transition={{
          x: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
        }}
        style={{
          boxShadow: "0 0 30px rgba(220, 38, 38, 0.4)",
        }}
      >
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white transform -translate-y-1/2" />
        <div className="absolute top-1/3 left-1/4 right-1/4 h-0.5 bg-white/80" />
        <div className="absolute bottom-1/3 left-1/4 right-1/4 h-0.5 bg-white/80" />
      </motion.div>

      {/* Interactive power-ups */}
      <motion.div
        className="fixed bottom-1/4 left-1/3 w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-yellow-400/30 cursor-pointer z-40"
        whileHover={{ scale: 1.4, rotate: 360, backgroundColor: "rgba(250, 204, 21, 0.4)" }}
        whileTap={{ scale: 0.8 }}
        onClick={(e) => handleBallClick(3, e)}
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Trophy className="w-6 h-6 text-yellow-400" />
      </motion.div>

      <motion.div
        className="fixed top-2/3 right-1/3 w-12 h-12 bg-blue-400/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-blue-400/30 cursor-pointer z-40"
        whileHover={{ scale: 1.4, rotate: -360, backgroundColor: "rgba(59, 130, 246, 0.4)" }}
        whileTap={{ scale: 0.8 }}
        onClick={(e) => handleBallClick(4, e)}
        animate={{
          x: [0, 20, 0],
          rotate: [0, -15, 15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Zap className="w-6 h-6 text-blue-400" />
      </motion.div>

      {/* Score display */}
      <motion.div
        className="fixed top-4 right-4 bg-card/80 backdrop-blur-sm border border-primary/30 rounded-lg px-4 py-2 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-400" />
          <span className="text-foreground font-bold">Score: {score}</span>
        </div>
      </motion.div>

      {/* Score popup */}
      <AnimatePresence>
        {showScorePopup && (
          <motion.div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-xl z-50"
            initial={{ opacity: 0, scale: 0.5, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: -50 }}
            exit={{ opacity: 0, scale: 0.5, y: -100 }}
            transition={{ duration: 0.5 }}
          >
            +10 Points!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click effect animations */}
      <AnimatePresence>
        {clickedBalls.map((ball) => (
          <motion.div
            key={ball.id}
            className="fixed w-8 h-8 bg-primary/50 rounded-full pointer-events-none z-40"
            style={{ left: ball.x - 16, top: ball.y - 16 }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ scale: 4, opacity: 0 }}
            transition={{ duration: 1 }}
          />
        ))}
      </AnimatePresence>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-2 h-2 bg-primary/30 rounded-full pointer-events-none z-30"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + i,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  )
}
