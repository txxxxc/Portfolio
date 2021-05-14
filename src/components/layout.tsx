import React from 'react'
import { ThemeProvider } from 'styled-components'
import Footer from '../components/Footer'
import { theme } from '../utilities/theme'

type Props = {
    title: string
    location: Location
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <main>{children}</main>
            <Footer />
        </ThemeProvider>
    )
}

export default Layout
