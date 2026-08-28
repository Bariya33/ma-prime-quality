import { SITE } from '../data/content.js';
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa';

import './Footer.css';

export default function Footer() {
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    SITE.email
  )}&su=${encodeURIComponent(
    'Project Inquiry - MA Prime Quality'
  )}&body=${encodeURIComponent(
    'Hi MA Prime Quality,\n\nI want to discuss a video editing project.'
  )}`;

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img
            src={SITE.logo}
            alt={SITE.name}
            className="footer__logo"
          />

          <div>
            <p className="footer__name">
              MA PRIME QUALITY
            </p>

            <p className="footer__tagline">
              EDITORS
            </p>
          </div>
        </div>

        <div className="footer__meta">
          <p>Professional Video Editing</p>

          <p className="footer__services">
            Weddings • Automotive • Events • Brand Promotions
          </p>
        </div>

        <div className="footer__links footer__social-icons">
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noreferrer"
            data-cursor="OPEN"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          
          <a
          href={SITE.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="OPEN"
          aria-label="YouTube"
          >
          <FaYoutube />
          </a>        

          <a
            href={SITE.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="OPEN"
            ria-label="Facebook"
          >
            <FaFacebookF />
          </a>    

          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            data-cursor="OPEN"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="OPEN"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {SITE.year} MA Prime Quality. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}