'use client'

import Image from 'next/image'
import { useState } from 'react'
import TitleAnimation from '@/components/TitleAnimation'
import './home.css'

export default function HomePage() {
  const [imageError, setImageError] = useState(false)

  const tags = [
    '投資小白',
    '網頁開發',
    '資料分析',
    '前後端開發',
    '排球',
    '攝影',
    '桌遊'
  ]

  return (
    <section id="home" className="page active">
      <div className="container">
        <div className="home-layout">
          {/* Personal Card */}
          <div className="personal-card">
            <div className="profile-image">
              {!imageError ? (
                <Image
                  src="/大頭照.jpg"
                  alt="陳竑齊的照片"
                  className="profile-photo"
                  width={120}
                  height={120}
                  onError={() => setImageError(true)}
                  priority
                />
              ) : (
                <div className="image-placeholder">
                  <i className="fas fa-user"></i>
                </div>
              )}
            </div>
            <div className="profile-info">
              <h1 className="name">陳竑齊</h1>
              <TitleAnimation />
            </div>
            <div className="tags-container">
              {tags.map((tag, index) => (
                <div key={index} className="tag">
                  {tag}
                </div>
              ))}
            </div>
            <div className="social-links">
              <a href="mailto:chenjustin824@ntu.im" className="social-link" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://github.com/chennjustin"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/hung-chi-chen-b82b86369/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/chccc_0824/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Introduction Text */}
          <div className="intro-content">
            <h2 className="intro-title">Hello!</h2>
            <p className="intro-subtitle">Here's Justin</p>
            <div className="intro-text">
              <p>
                大家好，我是陳竑齊，目前就讀於臺大資管系大三。最近我正在練習不要被內卷影響，保持自己的節奏做事；我對於資訊技術、網頁開發、資料分析、量化交易、心理學有興趣。
              </p>
              <p>
                在生活中，我喜歡拍天空，也熱衷於收集各式各樣的吊飾，也會不定時約朋友打排球，享受運動帶來的樂趣。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

