import React from 'react'
import styled from 'styled-components'

const NavBar: React.FC<unknown> = () => {
    return (
        <Nav>
            <NavLeft>
                <a href="#top">tt</a>
            </NavLeft>
            <NavRight>
                <a href="#about-me">About Me</a>
                <a href="#skills">Skills</a>
                <a href="#works">Works</a>
                <a href="#writing">Writing</a>
            </NavRight>
        </Nav>
    )
}

const Nav = styled.nav`
    display: flex;
    padding: 30px 50px 0;
    position: fixed;
    z-index: 2;
    width: 100%;
    a {
        display: block;
        font-size: 32px;
        opacity: 0.7;
        transition: opacity 0.4s;
        color: ${props => props.theme.colors.white};
        text-decoration: none;
        &:not(:nth-child(1)) {
            margin-left: 30px;
        }

        &:hover {
            opacity: 1;
        }
    }
`

const NavLeft = styled.div`
    flex-grow: 1;
`

const NavRight = styled.div`
    display: flex;
    align-items: center;
`

export default NavBar
