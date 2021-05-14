import React from 'react'
import styled from 'styled-components'

const Footer: React.FC<unknown> = () => {
    return (
        <Container>
            <p>&copy; Tomoya Tanaka | All Rights Reserved.</p>
        </Container>
    )
}

const Container = styled.footer`
    height: 50px;
    width: 100%;
    p {
        text-align: center;
        font-size: 24px;
    }
`

export default Footer
