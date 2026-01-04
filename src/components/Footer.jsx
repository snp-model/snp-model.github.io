import { Link } from 'react-router-dom';
import './Footer.css';

/**
 * サイト共通フッター
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__links">
            <Link to="/privacy" className="footer__link">
              プライバシーポリシー
            </Link>
            <Link to="/contact" className="footer__link">
              お問い合わせ
            </Link>
          </div>
          <p className="footer__copyright">
            © {currentYear} snp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
