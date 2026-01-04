import { motion } from 'framer-motion';
import './PrivacyPolicy.css';

/**
 * プライバシーポリシーページ
 */
export function PrivacyPolicy() {
  return (
    <motion.main
      className="privacy-policy container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="gradient-text">プライバシーポリシー</h1>
      
      <section className="policy-section">
        <h2>個人情報の利用目的</h2>
        <p>
          当サイトでは、お問い合わせの際にお名前やメールアドレス等の個人情報をご入力いただく場合がございます。
          これらの個人情報は、お問い合わせに対する回答や必要な情報を提供するためにのみ利用し、
          ご本人の同意なく他の目的で利用することはありません。
        </p>
      </section>

      <section className="policy-section">
        <h2>広告配信について</h2>
        <p>
          当サイトでは、第三者配信の広告サービス（Google AdSenseなど）を利用しています。
          広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookie（クッキー）を使用することがあります。
        </p>
        <p>
          Cookie を無効にする設定および Google AdSense に関する詳細は、
          <a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer">
            広告 – ポリシーと規約 – Google
          </a>
          をご覧ください。
        </p>
      </section>

      <section className="policy-section">
        <h2>アクセス解析ツールについて</h2>
        <p>
          当サイトでは、Googleによるアクセス解析ツール「Google Analytics」を利用しています。
          このGoogle Analyticsはトラフィックデータの収集のためにCookieを使用しています。
          このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
        </p>
        <p>
          この機能はCookieを無効にすることで収集を拒否することができますので、
          お使いのブラウザの設定をご確認ください。
        </p>
      </section>

      <section className="policy-section">
        <h2>免責事項</h2>
        <p>
          当サイトのコンテンツ・情報について、可能な限り正確な情報を掲載するよう努めておりますが、
          正確性や安全性を保証するものではありません。
          当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますので、あらかじめご了承ください。
        </p>
      </section>

      <section className="policy-section">
        <h2>プライバシーポリシーの変更</h2>
        <p>
          当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、
          本プライバシーポリシーの内容を適宜見直し、その改善に努めます。
          修正された最新のプライバシーポリシーは常に本ページにて開示されます。
        </p>
      </section>
    </motion.main>
  );
}
