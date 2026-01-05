// プロジェクトデータ
// 実際のプロジェクトに置き換えてください
export const projects = [
  {
    id: 'project-1',
    title: '全国都会度マップ | 住みたい街診断',
    description: '日本全国の市町村別に、人口増加率・高齢者割合・地価などの多様な指標を地図上で可視化し、比較することができます。統計データに基づいた客観的な「都会度」分析と、ライフスタイルに合わせた「住みたい街診断」で、あなたに最適な居住地探しをサポートします。',
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
