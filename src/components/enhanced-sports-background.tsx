"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function EnhancedSportsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      type: "light" | "grass" | "ball"
    }> = []

    // Create stadium atmosphere particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: Math.random() > 0.5 ? "#10b981" : "#f59e0b",
        type: Math.random() > 0.7 ? "ball" : Math.random() > 0.5 ? "light" : "grass",
      })
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.fillStyle = "rgba(2, 6, 23, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()

        if (particle.type === "ball") {
          // Draw mini footballs/cricket balls
          ctx.fillStyle = particle.color
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()

          // Add ball pattern
          ctx.strokeStyle = "#ffffff"
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 0.7, 0, Math.PI * 2)
          ctx.stroke()
        } else if (particle.type === "light") {
          // Stadium light glow
          const gradient = ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.size * 3,
          )
          gradient.addColorStop(0, particle.color + "80")
          gradient.addColorStop(1, particle.color + "00")
          ctx.fillStyle = gradient
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
          ctx.fill()
        } else {
          // Grass particles
          ctx.fillStyle = particle.color + "60"
          ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />

      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 stadium-floodlight animate-stadium-lights"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 stadium-floodlight animate-stadium-lights"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.7, 0.3, 0.7],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        />
        <motion.div
          className="absolute bottom-10 left-1/2 w-40 h-40 stadium-floodlight animate-stadium-lights"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        />
      </div>

      <div className="fixed inset-0 pointer-events-none z-0 pitch-lines animate-field-lines opacity-10" />
    </>
  )
}
