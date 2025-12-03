"use client";

import { FaWhatsapp } from "react-icons/fa";

type WhatsAppFloatProps = {
  phone?: string;
  message?: string;
};

const DEFAULT_PHONE = "919791912211";
const DEFAULT_MESSAGE =
  "Hi JP Finserv, I%27m interested in your loan services.";

const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({
  phone = DEFAULT_PHONE,
  message = DEFAULT_MESSAGE,
}) => {
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat with JP Finserv on WhatsApp"
    >
      <span className="wa-notice">Have doubts? Just click here</span>
      <FaWhatsapp className="wa-icon" aria-hidden="true" focusable="false" />
    </a>
  );
};

export default WhatsAppFloat;
