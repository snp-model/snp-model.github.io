// プロジェクトデータ
// 実際のプロジェクトに置き換えてください
export const projects = [
  {
    id: 'project-1',
    title: '全国都会度マップ | 住みたい街診断',
    description: '日本全国の市町村の都会度を夜間光、人口、地価などの統計データから算出し、地図上で可視化。質問に答えるだけで理想の暮らしが見つかる「住みたい街診断」機能も搭載。',
    type: 'web', // 'mobile' または 'web'
    image: '/assets/placeholder-mobile.svg',
    links: {
      live: "https://snp-model.github.io/urbanity-map/",
      appStore: null,
    },
    featured: true,
  },
  {
    id: 'project-2',
    title: '山域別天気予報',
    description: '日本の主要山域の天気予報を地図上で一目で確認できます。登山指数により、各山域の気象条件を色分けで表示します。',
    type: 'web', // 'mobile' または 'web'
    image: '/assets/placeholder-mobile.svg',
    links: {
      live: "https://snp-model.github.io/mountain-area-forecast/",
      appStore: null,
    },
    featured: true,
  },
];
