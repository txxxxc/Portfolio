import 'styled-components'

export const theme = {
    colors: {
        background: '#112E40',
        black: '#333333',
        white: '#fafafa',
        gray: '#CBCBCB',
        pink: '#FA5849',
        lightPink: '#FC7472',
        ruby: '#FF5252',
        vue: '#81C784',
        swift: '#FF8B36',
        firebase: '#FF8F00',
        javascript: '#FFD600',
        python: '#0277BD',
        typescript: '#1976D2',
        react: '#80DEEA',
        awad: '#07B4CD',
        aika: '#6C798F',
        studyRoom: '#81C784',
        ramenCollection: '#F8AA18',
        lit: {
            red: '#e63c35',
            blue: '#009bdb',
            green: '#67b62d',
            yellow: '#fac700',
        },
        businessCard: {
            pink: '#D92BC5',
            green: '#2BD92B',
            yellow: '#BFD92B',
            blue: '#2BD6D9',
        },
        language: {
            japanese: 'Hiragino Kaku Gothic',
        },
    },
} as const

type AppTheme = typeof theme

declare module 'styled-components' {
    interface DefaultTheme extends AppTheme {}
}
