"use client"

type WhatsAppFloatProps = {
  phone?: string
  message?: string
}

const DEFAULT_PHONE = "919791912211"
const DEFAULT_MESSAGE =
  "Hi JP Finserv, I%27m interested in your loan services."

const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({
  phone = DEFAULT_PHONE,
  message = DEFAULT_MESSAGE,
}) => {
  const href = `https://wa.me/${phone}?text=${message}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat with JP Finserv on WhatsApp"
    >
      <span className="wa-tooltip">Chat on WhatsApp</span>
      {/* Inline SVG styled to match the official WhatsApp glyph inside a circle */}
      <svg
        className="wa-icon"
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient
            id="waGrad"
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#61FD7D" />
            <stop offset="100%" stopColor="#2BB826" />
          </linearGradient>
        </defs>
        <circle cx="16" cy="16" r="16" fill="url(#waGrad)" />
        <path
          d="M9.5 23.5 10.4 20c-.7-1.1-1.1-2.4-1.1-3.7C9.3 12.8 12.3 10 16 10c1.7 0 3.3.6 4.5 1.8 1.2 1.1 1.9 2.7 1.9 4.4 0 3.7-3 6.7-6.7 6.7-1.2 0-2.3-.3-3.4-.9l-2.8.5Z"
          fill="#FFFFFF"
        />
        <path
          d="M13.7 13.8c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.4.1-.5.3-.2.2-.9.8-.9 2s.9 2.3 1 2.5c.1.2 1.7 2.6 4.3 3.5 2.1.8 2.6.7 3.1.7.5 0 1.5-.6 1.7-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.5-.4-.2-.2-1.5-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.2-.7.9-.9 1.1-.2.2-.3.2-.6.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.4-1.6-.1-.2 0-.4.1-.5.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3.1-.1.1-.2.2-.3.1-.1.1-.2.1-.3 0-.1-.1-.3-.1-.4-.1-.2-.7-1.8-.9-2.2Z"
          fill="#25D366"
        />
      </svg>
    </a>
  )
}

export default WhatsAppFloat


