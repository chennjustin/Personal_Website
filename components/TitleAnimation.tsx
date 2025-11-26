'use client'

import { useEffect, useState } from 'react'

const titles = [
  '臺灣大學資訊管理學系',
  'SITCON2025行銷組',
  '努力賺錢中'
]

export default function TitleAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % titles.length)
        setIsAnimating(false)
      }, 250)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="title-container">
        <p className={`title animated-title ${isAnimating ? 'fade-out' : 'fade-in'}`}>
          {titles[currentIndex]}
        </p>
      </div>
      <div className="profile-dots">
        {titles.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            data-index={index}
          ></span>
        ))}
      </div>
    </>
  )
}

