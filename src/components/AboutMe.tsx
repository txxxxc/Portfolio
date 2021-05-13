import React from 'react'
import styled from 'styled-components'
import { Section, SectionTitle, Wrapper } from '../utilities/style'

const AboutMe: React.FC<unknown> = () => {
    const socialAccounts = [
        {
            name: 'github',
            url: 'https://github.com/Tomoya113',
        },
        {
            name: 'gmail',
            url: 'mailto:tomoya113.code@gmail.com',
        },
        {
            name: 'qiita',
            url: 'https://qiita.com/tanaka-tt',
        },
    ]
    return (
        <Section>
            <Wrapper>
                <SectionTitle>About Me</SectionTitle>
                <Content>
                    <Information>
                        <h3>
                            田中智也 <span>Tomoya Tanaka</span>
                        </h3>
                        <p>
                            2001年大阪府生まれ。SwiftやTypeScriptなどを使ったフロントエンドの開発が好きで、普段はQiitaへの記事の投稿や個人開発、ハッカソンへの出場などを通じてプログラミングでアウトプットを行っています。
                            <br />
                            2020年の8月からLife is
                            Tech!という会社で中高生に向けにRubyを使ったWebサービスの開発、Swiftを使ったiOSアプリの開発について教えています。また、そこで使用する教科書の作成もしています。
                        </p>
                        <SocialLinks>
                            {socialAccounts.map((link, i) => (
                                <div key={i}>
                                    {link.name}, {link.url}
                                </div>
                            ))}
                        </SocialLinks>
                    </Information>
                </Content>
            </Wrapper>
        </Section>
    )
}

export default AboutMe

const Content = styled.div`
    display: flex;
    justify-content: space-between;
`
const Information = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    > h3 {
        font-size: 40px;
        font-weight: bold;
        border-left: ${props => `solid 15px ${props.theme.colors.lightPink}`};
        padding-left: 10px;
        margin-bottom: 30px;
    }
    span {
        font-size: 24px;
        font-weight: normal;
        color: ${props => props.theme.colors.gray};
    }
    p {
        font-size: 24px;
        font-family: ${props => props.theme.language.japanese};
        line-height: 1.5;
        flex-grow: 1;
    }
`
const SocialLinks = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
`

const Avatar = styled.div``
