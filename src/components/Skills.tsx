import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Section, SectionTitle, Wrapper } from '../utilities/style'
import { theme } from '../utilities/theme'

const Skills: React.FC<unknown> = () => {
    const languageNames: string[] = [
        'Firebase',
        'JavaScript',
        'Python',
        'React',
        'Ruby',
        'Swift',
        'TypeScript',
        'Vue',
    ]

    const { colors } = theme
    const { skills, languages } = useStaticQuery<GatsbyTypes.SkillsQuery>(
        graphql`
            query Skills {
                skills: allFile(
                    filter: { relativeDirectory: { eq: "skills" } }
                    sort: { fields: name }
                ) {
                    edges {
                        node {
                            childImageSharp {
                                gatsbyImageData(
                                    width: 50
                                    placeholder: NONE
                                    formats: [AUTO, WEBP, AVIF]
                                )
                            }
                            name
                        }
                    }
                }
                languages: allFile(
                    filter: { relativeDirectory: { eq: "languages" } }
                    sort: { fields: name }
                ) {
                    edges {
                        node {
                            childImageSharp {
                                gatsbyImageData(
                                    width: 50
                                    placeholder: NONE
                                    formats: [AUTO, WEBP, AVIF]
                                )
                            }
                            name
                        }
                    }
                }
            }
        `
    )
    return (
        <Section>
            <Wrapper>
                <SectionTitle>Skills</SectionTitle>
                <CardContainer>
                    {languages.edges.map((edge, i) => (
                        <Card color={colors[edge.node.name]} key={i}>
                            <div>
                                <ImageContainer>
                                    <FrontImage
                                        image={
                                            skills.edges[i].node.childImageSharp
                                                ?.gatsbyImageData
                                        }
                                        alt={edge.node.name}
                                        width={50}
                                        height={50}
                                    />
                                    <BackImage
                                        image={
                                            edge.node.childImageSharp
                                                ?.gatsbyImageData
                                        }
                                        alt={edge.node.name}
                                        width={50}
                                    />
                                </ImageContainer>
                                <p>{languageNames[i]}</p>
                            </div>
                        </Card>
                    ))}
                </CardContainer>
            </Wrapper>
        </Section>
    )
}

export default Skills

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const Card = styled.div<{ color: string }>`
    max-width: 230px;
    min-width: 230px;
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 30px 25px 30px;
    margin: 16px;
    border: solid 1px ${props => props.color};
    border-radius: 10px;
    background-color: ${props => props.color};
    transition: background-color 0.5s;
    &:hover {
        background-color: ${props => props.theme.colors.background};
        p {
            color: ${props => props.color};
        }
    }
    p {
        font-size: 32px;
        width: 60%;
        margin-left: 15px;
        transition: color 0.5s;
    }
    > div {
        display: flex;
        align-items: center;
    }
`

const ImageContainer = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
`

const FrontImage = styled(GatsbyImage)`
    position: absolute;
    transition: opacity 0.5s;
    opacity: 1;
    ${Card}:hover & {
        opacity: 0;
    }
`

const BackImage = styled(GatsbyImage)`
    position: absolute;
    transition: opacity 0.5s;
    opacity: 0;
    ${Card}:hover & {
        opacity: 1;
    }
`
