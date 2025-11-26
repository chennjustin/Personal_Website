'use client'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025.09 陳竑齊. 保留所有權利.</p>
        <div className="footer-social">
          <a href="mailto:chenjustin824@ntu.im" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://github.com/chennjustin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/hung-chi-chen-b82b86369/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/chccc_0824/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

