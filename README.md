# snp-model.github.io

個人開発した Web サービスやモバイルアプリを紹介するポートフォリオサイトです。

🌐 **Live Site**: [https://snp-model.github.io/](https://snp-model.github.io/)

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Styling**: Vanilla CSS (CSS Variables, Flexbox/Grid)
- **Deployment**: GitHub Actions (自動デプロイ)

## 開発

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動 (http://localhost:5173)
npm run dev

# ビルド
npm run build

# ビルド結果のプレビュー
npm run preview

# Lint
npm run lint
```

## デプロイ

### 自動デプロイ（推奨）

`main` ブランチに push すると、GitHub Actions が自動的にビルド & デプロイを実行します。

**初回のみ設定が必要:**

1. GitHub リポジトリの **Settings → Pages**
2. **Build and deployment → Source** を **"GitHub Actions"** に変更

### 手動デプロイ

```bash
npm run deploy
```

※ このコマンドは `gh-pages` パッケージを使用します（非推奨：GitHub Actions を使用してください）。

## プロジェクトの追加

`src/data/projects.js` を編集して、新しいプロジェクトを追加できます:

```javascript
{
  id: 'unique-id',
  title: 'Project Name',
  description: '説明文',
  type: 'web', // または 'mobile'
  image: '/assets/screenshot.png', // オプション
  links: {
    live: 'https://...', // 公開URL
  },
  featured: true, // 強調表示
}
```

## ファイル構成

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions デプロイワークフロー
├── public/
│   ├── robots.txt          # クローラー設定
│   ├── sitemap.xml         # サイトマップ
│   └── 404.html            # カスタム404ページ
├── src/
│   ├── components/         # Reactコンポーネント
│   ├── data/
│   │   └── projects.js     # プロジェクトデータ
│   ├── index.css           # グローバルスタイル
│   └── App.jsx             # メインApp
└── index.html              # エントリーHTML (SEO meta tags)
```

## ライセンス

MIT
