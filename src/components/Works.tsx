import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { flexCenter, Section, SectionTitle, Wrapper } from '../utilities/style'
import { works } from '../utilities/works'

const Works: React.FC<unknown> = () => {
    const {
        worksThumbnail,
        languages,
    } = useStaticQuery<GatsbyTypes.WorksQuery>(
        graphql`
            query Works {
                worksThumbnail: allFile(
                    filter: { relativeDirectory: { eq: "works" } }
                    sort: { fields: name }
                ) {
                    edges {
                        node {
                            childImageSharp {
                                gatsbyImageData(
                                    formats: [AUTO, WEBP, AVIF]
                                    placeholder: BLURRED
                                )
                            }
                            name
                        }
                    }
                }
                languages: allFile(
                    filter: { relativeDirectory: { eq: "languages" } }
                ) {
                    edges {
                        node {
                            childImageSharp {
                                gatsbyImageData(
                                    width: 50
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                    transformOptions: { fit: CONTAIN }
                                )
                            }
                            name
                        }
                    }
                }
            }
        `
    )
    console.log({ works })
    console.log({ languages })
    const { edges } = languages
    const result = edges.filter(edge => {
        return works[1].usedLanguage.includes(edge.node.name)
    })
    console.log({ result })

    return (
        <Section>
            <Wrapper>
                <SectionTitle>Works</SectionTitle>
                <Container>
                    {worksThumbnail.edges.map((edge, i) => {
                        const usedLanguage = languages.edges.filter(edge => {
                            return works[i].usedLanguage.includes(
                                edge.node.name
                            )
                        })
                        return (
                            <Work href={works[i].url} key={i}>
                                <Thumbnail
                                    image={
                                        edge.node.childImageSharp
                                            ?.gatsbyImageData
                                    }
                                    alt={edge.node.name}
                                />
                                <h4>{works[i].title}</h4>
                                <p>{works[i].description}</p>
                                <UsedLanguageContainer>
                                    {usedLanguage.map((element, i) => (
                                        <GatsbyImage
                                            key={i}
                                            image={
                                                element.node.childImageSharp
                                                    ?.gatsbyImageData
                                            }
                                            alt={element.node.name}
                                            width={50}
                                            objectFit={'contain'}
                                        />
                                    ))}
                                </UsedLanguageContainer>
                            </Work>
                        )
                    })}
                </Container>
            </Wrapper>
        </Section>
    )
}

const Container = styled.div`
    ${flexCenter}
    flex-wrap: wrap;
`

const Work = styled.a`
    display: block;
    max-width: 460px;
    min-height: 500px;
    margin: 10px 24px;
    color: ${props => props.theme.colors.white};
    text-decoration: none;

    h4 {
        font-family: ${props => props.theme.language.japanese};
        font-size: 32px;
        margin: 0;
        margin-top: 24px;
    }
    p {
        font-family: ${props => props.theme.language.japanese};
        line-height: 1.5;
        margin-top: 12px;
    }
`

const Thumbnail = styled(GatsbyImage)`
    border-radius: 10px;
    transition: box-shadow 0.2s;
    ${Work}:hover & {
        box-shadow: 0px 0px 15px #fafafa;
    }
`

const UsedLanguageContainer = styled.div`
    display: flex;
    margin-top: 24px;
    div {
        :not(:nth-child(1)) {
            margin-left: 12px;
        }
    }
`

export default Works
