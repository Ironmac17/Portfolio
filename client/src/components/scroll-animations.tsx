"use client"
import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ScrollAnimations() {
  const { scrollYProgress } = useScroll()
  const [footballPosition, setFootballPosition] = useState({ x: 0, y: 0 })
  const [cricketBallPosition, setCricketBallPosition] = useState({ x: 0, y: 0 })
  const [showKickAnimation, setShowKickAnimation] = useState(false)
  const [showBatAnimation, setShowBatAnimation] = useState(false)

  // Transform scroll progress to ball positions
  const footballX = useTransform(scrollYProgress, [0, 1], [0, window?.innerWidth || 1200])
  const footballY = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [100, 200, 150, 300])
  const cricketBallX = useTransform(scrollYProgress, [0, 1], [window?.innerWidth || 1200, 0])
  const cricketBallY = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [150, 100, 250, 200])

  useEffect(() => {
    const unsubscribeFootball = footballX.onChange((x) => {
      setFootballPosition((prev) => ({ ...prev, x }))
    })
    const unsubscribeFootballY = footballY.onChange((y) => {
      setFootballPosition((prev) => ({ ...prev, y }))
    })
    const unsubscribeCricket = cricketBallX.onChange((x) => {
      setCricketBallPosition((prev) => ({ ...prev, x }))
    })
    const unsubscribeCricketY = cricketBallY.onChange((y) => {
      setCricketBallPosition((prev) => ({ ...prev, y }))
    })

    return () => {
      unsubscribeFootball()
      unsubscribeFootballY()
      unsubscribeCricket()
      unsubscribeCricketY()
    }
  }, [footballX, footballY, cricketBallX, cricketBallY])

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const windowHeight = window.innerHeight

      // Trigger kick animation at certain scroll points
      if (scrolled > windowHeight * 0.5 && scrolled < windowHeight * 0.7) {
        setShowKickAnimation(true)
        setTimeout(() => setShowKickAnimation(false), 1000)
      }

      // Trigger bat animation at different scroll points
      if (scrolled > windowHeight * 1.5 && scrolled < windowHeight * 1.7) {
        setShowBatAnimation(true)
        setTimeout(() => setShowBatAnimation(false), 1000)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Football with kick animation */}
      <motion.div
        className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg"
        style={{
          x: footballPosition.x,
          y: footballPosition.y,
        }}
        animate={
          showKickAnimation
            ? {
                scale: [1, 1.5, 1],
                rotate: [0, 360, 720],
              }
            : {}
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-2 border-2 border-white rounded-full opacity-60" />
        <div className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-white transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-0.5 h-6 bg-white transform -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      {/* Cricket ball with bat hit animation */}
      <motion.div
        className="absolute w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-800 shadow-lg"
        style={{
          x: cricketBallPosition.x,
          y: cricketBallPosition.y,
        }}
        animate={
          showBatAnimation
            ? {
                scale: [1, 1.3, 1],
                x: cricketBallPosition.x + 100,
                y: cricketBallPosition.y - 50,
              }
            : {}
        }
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="absolute inset-1 border border-white rounded-full opacity-40" />
        <div className="absolute top-2 left-1/2 w-6 h-0.5 bg-white transform -translate-x-1/2 rotate-45" />
        <div className="absolute top-2 left-1/2 w-6 h-0.5 bg-white transform -translate-x-1/2 -rotate-45" />
      </motion.div>

      {/* Animated field lines */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-400 opacity-30"
        animate={{
          scaleX: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
