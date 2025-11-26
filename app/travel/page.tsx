'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import './travel.css'

type Destination = 'japan' | 'hongkong-macau' | 'australia' | null

export default function TravelPage() {
  const [activeModal, setActiveModal] = useState<Destination>(null)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    const elements = document.querySelectorAll('.fade-in, .destination-card')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const openModal = (destination: Destination) => {
    if (destination) {
      setActiveModal(destination)
      document.body.style.overflow = 'hidden'
    }
  }

  const closeModal = () => {
    setActiveModal(null)
    document.body.style.overflow = 'auto'
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const japanPhotos = Array.from({ length: 11 }, (_, i) => `/jp${i + 1}.jpg`)
  const hkPhotos = Array.from({ length: 7 }, (_, i) => `/hm (${i + 1}).jpg`)

  return (
    <>
      <div className="container">
        <section className="destination-selection" id="destinationSelection">
          <div className="page-header">
            <h1 className="page-title">My Journey</h1>
            <p className="page-subtitle">Explore my journey and travel memories</p>
          </div>

          <div className="destination-grid">
            {/* Japan Destination */}
            <div
              className="destination-card fade-in"
              data-destination="japan"
              onClick={() => openModal('japan')}
            >
              <div className="destination-image">
                <Image
                  src="/jp-cover.jpg"
                  alt="日本"
                  className="destination-photo"
                  width={400}
                  height={300}
                />
                <div className="destination-overlay">
                  <div className="destination-date">2025年6月</div>
                  <div className="destination-location">
                    <i className="fas fa-map-marker-alt"></i>
                    Osaka & Kyoto
                  </div>
                </div>
              </div>
              <div className="destination-content">
                <h3 className="destination-title">Japan</h3>
                <p className="destination-summary">第一次不是和家人出國，是和朋友一起的旅程...</p>
                <div className="destination-tags">
                  {['環球', '大阪', '萬博', '鮭魚', '朋友', '京都', '爆買', '攝影', '飛機故障'].map(
                    (tag, i) => (
                      <span key={i} className="tag">
                        {tag}
                      </span>
                    )
                  )}
                </div>
                <button className="explore-btn">
                  <span>Explore More</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>

            {/* Hong Kong & Macau Destination */}
            <div
              className="destination-card fade-in"
              data-destination="hongkong-macau"
              onClick={() => openModal('hongkong-macau')}
            >
              <div className="destination-image">
                <Image
                  src="/hm-cover.jpg"
                  alt="香港 & 澳門"
                  className="destination-photo"
                  width={400}
                  height={300}
                />
                <div className="destination-overlay">
                  <div className="destination-date">2025年8月</div>
                  <div className="destination-location">
                    <i className="fas fa-map-marker-alt"></i>
                    Hong Kong & Macau
                  </div>
                </div>
              </div>
              <div className="destination-content">
                <h3 className="destination-title">Hong Kong & Macau</h3>
                <p className="destination-summary">成為導遊的港澳六天五夜...</p>
                <div className="destination-tags">
                  {['港式燒臘', '一堆纜車', '蛋塔', '奢華賭場', '冰室', '家人', '自由行', '澳門塔'].map(
                    (tag, i) => (
                      <span key={i} className="tag">
                        {tag}
                      </span>
                    )
                  )}
                </div>
                <button className="explore-btn">
                  <span>Explore More</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>

            {/* Australia Destination */}
            <div className="destination-card disabled fade-in" data-destination="australia">
              <div className="destination-image">
                <Image
                  src="/comingsoon.jpg"
                  alt="澳洲"
                  className="destination-photo"
                  width={400}
                  height={300}
                />
                <div className="destination-overlay coming-soon-overlay">
                  <div className="coming-soon-text">Coming Soon</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Japan Modal */}
        {activeModal === 'japan' && (
          <div className="travel-modal active" id="japanModal">
            <div className="modal-overlay" onClick={closeModal}></div>
            <div className="modal-content">
              <button className="modal-close" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>

              <div className="modal-header">
                <div className="header-content">
                  <div className="country-flag">
                    <Image
                      src="/japan-flag.png"
                      alt="日本國旗"
                      className="flag-icon"
                      width={60}
                      height={40}
                    />
                  </div>
                  <div className="country-info">
                    <h2 className="country-title">Japan</h2>
                    <div className="travel-dates">
                      <i className="fas fa-calendar-alt"></i>
                      <span>2025. 6/15~6/20+1</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-body">
                <div className="travel-description">
                  <p>第一次不是和家人出國，是和朋友一起的旅程...</p>
                </div>

                <div className="trip-highlights">
                  <h3>Highlights</h3>
                  <div className="highlights-grid">
                    {[
                      { icon: 'fa-magic', text: '環球影城從早玩到晚' },
                      { icon: 'fa-utensils', text: '萬國博覽會w/璀璨的夢洲' },
                      { icon: 'fa-torii-gate', text: '看同行醉到在樓梯間溜滑梯' },
                      { icon: 'fa-leaf', text: '吃遍日本食物（感謝黃聖凱）' },
                      { icon: 'fa-plane-departure', text: '飛機故障多待一天大阪' },
                    ].map((item, i) => (
                      <div key={i} className="highlight-item">
                        <div className="highlight-icon">
                          <i className={`fas ${item.icon}`}></i>
                        </div>
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="photo-memories">
                  <h3>照片集</h3>
                  <div className="photo-grid">
                    {japanPhotos.map((photo, i) => (
                      <div key={i} className="photo-item">
                        <Image
                          src={photo}
                          alt={`Japan Photo ${i + 1}`}
                          className="day-photo"
                          width={300}
                          height={300}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Hong Kong & Macau Modal */}
        {activeModal === 'hongkong-macau' && (
          <div className="travel-modal active" id="hongkongMacauModal">
            <div className="modal-overlay" onClick={closeModal}></div>
            <div className="modal-content">
              <button className="modal-close" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>

              <div className="modal-header">
                <div className="header-content">
                  <div className="country-flag">
                    <Image
                      src="/hm-flag.jpg"
                      alt="香港區旗"
                      className="flag-icon"
                      width={60}
                      height={40}
                    />
                  </div>
                  <div className="country-info">
                    <h2 className="country-title">Hong Kong & Macau</h2>
                    <div className="travel-dates">
                      <i className="fas fa-calendar-alt"></i>
                      <span>2025. 8/17~8/22</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-body">
                <div className="travel-description">
                  <p>成為導遊的港澳六天五夜...</p>
                </div>

                <div className="trip-highlights">
                  <h3>Highlights</h3>
                  <div className="highlights-grid">
                    {[
                      { icon: 'fa-utensils', text: '港式燒臘&各種冰室' },
                      { icon: 'fa-mountain', text: '吃遍每間蛋塔店' },
                      { icon: 'fa-cookie-bite', text: '當導遊解決全家食衣住行' },
                      { icon: 'fa-building', text: '葡式建築&賭場' },
                      { icon: 'fa-tower-broadcast', text: '超巨奢華的氹仔' },
                    ].map((item, i) => (
                      <div key={i} className="highlight-item">
                        <div className="highlight-icon">
                          <i className={`fas ${item.icon}`}></i>
                        </div>
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="photo-memories">
                  <h3>照片集</h3>
                  <div className="photo-grid">
                    {hkPhotos.map((photo, i) => (
                      <div key={i} className="photo-item">
                        <Image
                          src={photo}
                          alt={`Hong Kong & Macau Photo ${i + 1}`}
                          className="day-photo"
                          width={300}
                          height={300}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button className="back-to-top" id="backToTop" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </>
  )
}

