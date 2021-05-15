type work = {
    title: string
    description: string
    usedLanguage: string[]
    url: string
}
export const works: work[] = [
    {
        title: 'Aika',
        description:
            '本アプリはZoomでのオンラインミーティングをより円滑に進めるための支援サービスです。',
        usedLanguage: ['ruby', 'swift'],
        url: 'https://jphacks.com/information/award-finalists2020/',
    },
    {
        title: 'Awad',
        description:
            '関西メンター主催の淡路島全体を使った宝さがしイベントAWA-DのiOSアプリです。',
        usedLanguage: ['swift', 'firebase'],
        url: '',
    },
    {
        title: '名刺',
        description: 'Web上で見れる名刺を作りました',
        usedLanguage: ['javascript'],
        url: 'https://la-tt-portfolio.netlify.app',
    },
    {
        title: 'Sports Festa2020',
        description:
            '関西メンター主催の運動会「SportsFesta2020」のLPの作成を担当しました。',
        usedLanguage: ['typescript', 'react', 'gatsby'],
        url: 'https://sportsfesta-2020.lit-kansai-mentors.com/',
    },
    {
        title: 'Study Room',
        description: 'Study Roomは、時間管理付きのオンライン自習室です。',
        usedLanguage: ['vue', 'firebase'],
        url: 'https://www.youtube.com/watch?v=meBisgAGHmg',
    },
    {
        title: '時間割シミュレーター',
        description: '高校の履修計画を助けるシミュレーターです',
        usedLanguage: ['react', 'typescript'],
        url: 'https://subject-app-v2.herokuapp.com/',
    },
]
