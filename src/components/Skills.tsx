import React from 'react'
import styled from 'styled-components'
import { Section, SectionTitle, Wrapper } from '../utilities/style'

const Skills: React.FC<unknown> = () => {
    return (
        <Section>
            <Wrapper>
                <SectionTitle>Skills</SectionTitle>
                <CardContainer></CardContainer>
            </Wrapper>
        </Section>
    )
}

export default Skills

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const Card = styled.div``
