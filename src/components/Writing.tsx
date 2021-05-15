import { StaticImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Section, SectionTitle, Wrapper } from '../utilities/style'

type Post = {
    url: string
    title: string
}

const Writing: React.FC<unknown> = () => {
    const [posts, setPosts] = useState<Post[]>([])
    useEffect(() => {
        fetch(
            'https://qiita.com/api/v2/authenticated_user/items?page=1&per_page=8',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization:
                        'Bearer ' + '56b2308c8f214961aa15a809828eb28c4a5f62f9',
                },
            }
        )
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            })
    }, [])
    return (
        <Section>
            <Wrapper>
                <SectionTitle>Writing</SectionTitle>
                <PostsContainer>
                    {posts.map((post, i) => (
                        <Post
                            href={post.url}
                            key={i}
                            target="_blank"
                            rel="noopener noreferrer">
                            <StaticImage
                                src="../images/writing/qiita.png"
                                alt="qiita"
                                width={87}
                            />
                            <p>{post.title}</p>
                        </Post>
                    ))}
                </PostsContainer>
            </Wrapper>
        </Section>
    )
}

const PostsContainer = styled.div``

const Post = styled.a`
    display: flex;
    align-items: center;
    p {
        text-decoration: underline;
        font-family: ${props => `${props.theme.language.japanese}`};
        font-size: 20px;
        font-weight: bold;
        color: ${props => `${props.theme.colors.white}`};
        margin-left: 20px;
        opacity: 0.7;
        transition: opacity 0.4s;
        &:hover {
            opacity: 1;
        }
    }
`

export default Writing
