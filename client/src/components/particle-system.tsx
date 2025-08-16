"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  velocity: { x: number; y: number }
  type: "football" | "cricket" | "spark" | "tech"
}

export function ParticleSystem() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const createParticle = (id: number): Particle => {
      const types: Particle["type"][] = ["football", "cricket", "spark", "tech"]
      const type = types[Math.floor(Math.random() * types.length)]

      const colors = {
        football: "#f97316",
        cricket: "#eab308",
        spark: "#10b981",
        tech: "#3b82f6",
      }

      return {
        id,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 8 + 4,
        color: colors[type],
        velocity: {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2,
        },
        type,
      }
    }

    const initialParticles = Array.from({ length: 50 }, (_, i) => createParticle(i))
    setParticles(initialParticles)

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          x: (particle.x + particle.velocity.x + window.innerWidth) % window.innerWidth,
          y: (particle.y + particle.velocity.y + window.innerHeight) % window.innerHeight,
        })),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const getParticleShape = (particle: Particle) => {
    switch (particle.type) {
      case "football":
        return (
          <motion.div
            className="rounded-full border-2"
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              borderColor: "#fff",
              boxShadow: `0 0 ${particle.size}px ${particle.color}50`,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        )
      case "cricket":
        return (
          <motion.div
            className="rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              background: `radial-gradient(circle, ${particle.color}, #dc2626)`,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}40`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />
        )
      case "spark":
        return (
          <motion.div
            className="rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        )
      case "tech":
        return (
          <motion.div
            className="rounded"
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
            animate={{ rotate: [0, 120, 240, 360] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
          />
        )
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: particle.x,
            top: particle.y,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {getParticleShape(particle)}
        </motion.div>
      ))}
    </div>
  )
}
