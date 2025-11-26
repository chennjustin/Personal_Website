'use client'

import { useEffect, useState } from 'react'
import './contact.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

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

    return () => observer.disconnect()
  }, [])

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'email':
        if (!value) return '此欄位為必填'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return '請輸入有效的電子郵件地址'
        }
        return ''
      case 'name':
      case 'subject':
      case 'message':
        if (!value.trim()) return '此欄位為必填'
        return ''
      default:
        return ''
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const error = validateField(name, value)
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Validate all fields
    const newErrors: Record<string, string> = {}
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData])
      if (error) {
        newErrors[key] = error
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitStatus(null), 3000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus(null), 3000)
      }
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="page active">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Contact Me</h1>
          <p className="page-subtitle">Let's connect and create something amazing together</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card fade-in">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h3>電子郵件</h3>
                <p>chenjustin824@ntu.im</p>
                <a href="mailto:chenjustin824@ntu.im" className="contact-link">
                  發送郵件
                </a>
              </div>
            </div>

            <div className="contact-card fade-in">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-details">
                <h3>電話</h3>
                <p>+886 963-617-655</p>
                <a href="tel:+886963617655" className="contact-link">
                  撥打電話
                </a>
              </div>
            </div>

            <div className="contact-card fade-in">
              <div className="contact-icon">
                <i className="fab fa-github"></i>
              </div>
              <div className="contact-details">
                <h3>GitHub</h3>
                <p>查看我的專案！！</p>
                <a
                  href="https://github.com/chennjustin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  訪問 GitHub
                </a>
              </div>
            </div>

            <div className="contact-card fade-in">
              <div className="contact-icon">
                <i className="fab fa-linkedin"></i>
              </div>
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <p>我的LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/hung-chi-chen-b82b86369/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  查看檔案
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container fade-in">
            <div className="contact-form">
              <h3>發送訊息</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="您的姓名"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {errors.name && <div className="field-error">{errors.name}</div>}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="您的電子郵件"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {errors.email && <div className="field-error">{errors.email}</div>}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="主旨"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {errors.subject && <div className="field-error">{errors.subject}</div>}
                </div>
                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="您的訊息"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  ></textarea>
                  {errors.message && <div className="field-error">{errors.message}</div>}
                </div>
                {submitStatus === 'success' && (
                  <div className="success-message">
                    <i className="fas fa-check-circle"></i>
                    訊息已成功發送！我會盡快回覆您。
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="error-message">
                    <i className="fas fa-exclamation-circle"></i>
                    發送失敗，請稍後再試。
                  </div>
                )}
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? '發送中...' : '發送訊息'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

