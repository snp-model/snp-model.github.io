import { motion } from 'framer-motion';
import { Mail, ExternalLink, Github } from 'lucide-react';
import './Contact.css';

/**
 * お問い合わせページ
 */
export function Contact() {
  return (
    <motion.main
      className="contact container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="gradient-text">お問い合わせ</h1>
      
      <section className="contact-intro">
        <p>
          ご質問、ご相談、お仕事のご依頼などがございましたら、
          以下のGoogleフォームよりお気軽にお問い合わせください。
        </p>
      </section>

      <section className="contact-form-section">
        <a
          href="https://forms.gle/BtnqAWXPqQLJ8i6KA"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          <Mail size={20} />
          <span>Googleフォームでお問い合わせ</span>
          <ExternalLink size={16} />
        </a>
      </section>

      <section className="contact-info">
        <h2>運営者について</h2>
        <div className="info-content">
          <div className="operator-name">
            <strong>ハンドルネーム:</strong> snp
          </div>
          <p>
            個人で開発したWebアプリケーションを公開しています。
          </p>
          <p>
            ご質問やフィードバックなどがございましたら、お気軽にお問い合わせください。
          </p>
          <a
            href="https://github.com/snp-model"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <Github size={20} />
            <span>GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </section>
    </motion.main>
  );
}
