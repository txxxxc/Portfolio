import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { getImage, StaticImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import React from 'react'
import styled from 'styled-components'
import { flexCenter } from '../utilities/style'

const Header: React.FC<unknown> = () => {
    const { placeholderImage } = useStaticQuery(
        graphql`
            query {
                placeholderImage: file(
                    relativePath: { eq: "header/background-fluid.png" }
                ) {
                    childImageSharp {
                        gatsbyImageData(
                            width: 1920
                            placeholder: NONE
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
            }
        `
    )

    const image = getImage(placeholderImage)

    const bgImage = convertToBgImage(image)

    return (
        <StyledBackgroundImage
            Tag="section"
            {...bgImage}
            preserveStackingContext>
            <Title>
                WELCOME TO <br />
                MY PORTFOLIO
            </Title>
            <StaticImage
                src="../images/header/background-pattern1.png"
                alt="top left image"
                style={TopLeftPattern as React.CSSProperties}
            />
            <StaticImage
                src="../images/header/background-pattern2.png"
                alt="bottom right image"
                style={BottomRightPattern as React.CSSProperties}
            />
        </StyledBackgroundImage>
    )
}

const Title = styled.h1`
    position: absolute;
    top: 20%;
    left: 12%;
    font-size: 108px;
    font-weight: bold;
    line-height: 1.2;
`

const StyledBackgroundImage = styled(BackgroundImage)`
    position: relative;
    height: 100vh;
    ${flexCenter}
`

const TopLeftPattern = {
    position: 'absolute',
    backgroundPosition: 'top left',
    top: '0%',
    left: '0%',
    zIndex: -1,
}

const BottomRightPattern = {
    position: 'absolute',
    backgroundPosition: 'bottom right',
    bottom: '0%',
    right: '0%',
    zIndex: -1,
}

export default Header
