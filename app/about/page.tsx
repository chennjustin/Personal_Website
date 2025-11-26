'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import './about.css'

export default function AboutPage() {
  const [copiedText, setCopiedText] = useState<string | null>(null)

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)
      setTimeout(() => setCopiedText(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  useEffect(() => {
    // Scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    const elements = document.querySelectorAll('.fade-in')
    elements.forEach((el) => observer.observe(el))

    // Progress bar animation
    const progressObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-fill')
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                const width = (bar as HTMLElement).getAttribute('data-width')
                if (width) {
                  (bar as HTMLElement).style.width = width + '%'
                }
              }, index * 200)
            })
            progressObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      progressObserver.observe(aboutSection)
    }

    return () => {
      observer.disconnect()
      progressObserver.disconnect()
    }
  }, [])

  return (
    <section id="about" className="page active">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">Learn more about my journey and experiences</p>
        </div>

        <div className="about-layout">
          {/* Left Column */}
          <div className="about-left fade-in">
            {/* Contact Information */}
            <div className="info-card fade-in">
              <h3 className="info-title">
                <i className="fas fa-address-book"></i>
                <span>聯絡資訊</span>
              </h3>
              <div className="contact-info">
                <div className="contact-item" data-copy="chenjustin824@gmail.com">
                  <i className="fas fa-envelope"></i>
                  <span>chenjustin824@gmail.com</span>
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard('chenjustin824@gmail.com')}
                    aria-label="複製郵箱"
                  >
                    <i className={`fas ${copiedText === 'chenjustin824@gmail.com' ? 'fa-check' : 'fa-copy'}`}></i>
                  </button>
                </div>
                <div className="contact-item" data-copy="0963617655">
                  <i className="fas fa-phone"></i>
                  <span>0963617655</span>
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard('0963617655')}
                    aria-label="複製電話"
                  >
                    <i className={`fas ${copiedText === '0963617655' ? 'fa-check' : 'fa-copy'}`}></i>
                  </button>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Taiwan, New Taipei City</span>
                </div>
                <div className="contact-item">
                  <i className="fab fa-github"></i>
                  <a href="https://github.com/chennjustin" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
                <div className="contact-item">
                  <i className="fab fa-linkedin"></i>
                  <a
                    href="https://www.linkedin.com/in/hung-chi-chen-b82b86369/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Hard Skills */}
            <div className="info-card fade-in">
              <h3 className="info-title">
                <i className="fas fa-code"></i>
                <span>Hard Skill</span>
              </h3>
              <div className="skill-tags">
                {['Python', 'C / C++', 'R', 'Latex', 'Web Development', 'Node.js', 'SQL'].map(
                  (skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="info-card fade-in">
              <h3 className="info-title">
                <i className="fas fa-users"></i>
                <span>Soft Skill</span>
              </h3>
              <div className="skill-tags">
                {['投資理財', '團隊協作', '專案管理', '溝通協調', '解決問題'].map(
                  (skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Education */}
            <div className="info-card fade-in">
              <h3 className="info-title">
                <i className="fas fa-graduation-cap"></i>
                <span>學歷</span>
              </h3>
              <div className="education-timeline">
                <div className="education-item">
                  <div className="education-period">Sep. 2020 ~ Jun. 2023</div>
                  <h4 className="education-school">成功高中</h4>
                </div>
                <div className="education-item">
                  <div className="education-period">Sep. 2023 ~ Jun. 2027</div>
                  <h4 className="education-school">臺灣大學資訊管理學系</h4>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="info-card fade-in">
              <h3 className="info-title">
                <i className="fas fa-language"></i>
                <span>語言能力</span>
              </h3>
              <div className="language-skills">
                <div className="language-item">
                  <div className="language-info">
                    <span className="language-name">中文</span>
                    <span className="language-level">母語</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" data-width="100"></div>
                  </div>
                </div>
                <div className="language-item">
                  <div className="language-info">
                    <span className="language-name">English</span>
                    <span className="language-level">流利</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" data-width="85"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="about-right">
            {/* Personal Statement */}
            <div className="personal-statement fade-in">
              <h2>陳竑齊</h2>
              <p className="title">臺灣大學資訊管理學系</p>
              <p className="statement">
                我是來自臺大資管的陳竑齊，熱愛排球、攝影、桌遊和收集各種奇怪的吊飾，最近正在學習保持自己的節奏做事。
              </p>
            </div>

            {/* Work Experience */}
            <div className="experience-section fade-in">
              <h3 className="section-title">
                <i className="fas fa-briefcase"></i>
                <span>活動參與&工作經驗</span>
              </h3>
              <div className="experience-timeline">
                {[
                  { title: '2024 資管營隊輔組', period: 'Sep.2023~Feb.2024' },
                  { title: '2024 宿營攝影組', period: 'Apr.2024~Aug.2024' },
                  { title: '2025 資管營活動組', period: 'Sep.2024~Feb.2025' },
                  { title: 'DevFest Taipei 2024 與會者', period: 'Nov.2024' },
                  { title: 'SITCON2025 行銷組', period: 'Sep.2024~Mar.2025' },
                  { title: '數學&物理家教', period: 'Jan.2024~Now' },
                  { title: '經濟系教授(Prof. Park)研究助理', period: 'Jun.2025~Now' },
                  { title: 'Cofacts 實習', period: 'Oct.2025~Now' },
                ].map((exp, index) => (
                  <div key={index} className="experience-item">
                    <div className="experience-header">
                      <h4>{exp.title}</h4>
                      <span className="experience-company">{exp.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="interests-section fade-in">
              <h3 className="section-title">
                <i className="fas fa-heart"></i>
                <span>興趣</span>
              </h3>
              <div className="interest-tiles">
                <div className="interest-tile">
                  <Image src="/photo.jpg" alt="攝影" className="interest-img" width={120} height={120} />
                  <span className="interest-chip">
                    <i className="fas fa-camera"></i>攝影
                  </span>
                </div>
                <div className="interest-tile">
                  <Image src="/game.jpg" alt="桌遊" className="interest-img" width={120} height={120} />
                  <span className="interest-chip">
                    <i className="fas fa-dice"></i>桌遊
                  </span>
                </div>
                <div className="interest-tile">
                  <Image
                    src="/volleyball.jpg"
                    alt="排球"
                    className="interest-img"
                    width={120}
                    height={120}
                  />
                  <span className="interest-chip">
                    <i className="fas fa-volleyball-ball"></i>排球
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

