# snp-model.github.io

個人開発した Web サービスやモバイルアプリを紹介するポートフォリオサイトです。

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Styling**: Vanilla CSS (CSS Variables, Flexbox/Grid)

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

GitHub Pages へのデプロイ:

```bash
npm run deploy
```

このコマンドは `dist` フォルダを `gh-pages` ブランチにプッシュします。

## プロジェクトの追加

`src/data/projects.js` を編集して、新しいプロジェクトを追加できます:

```javascript
{
  id: 'unique-id',
  title: 'Project Name',
  description: '説明文',
  type: 'web', // または 'mobile'
  image: '/assets/screenshot.png',
  tech: ['React', 'Firebase'],
  links: {
    github: 'https://github.com/...',
    live: 'https://...',
  },
  featured: true, // 目立たせたい場合
}
```

## ライセンス

MIT
