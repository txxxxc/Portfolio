import styled, { css } from 'styled-components'

export const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Section = styled.section`
    padding-top: 50px;
    width: 100%;
    ${flexCenter}
`
export const Wrapper = styled.div`
    width: 1200px;
`
export const SectionTitle = styled.h2`
    font-size: 72px;
    margin: 0 0 50px;
`
