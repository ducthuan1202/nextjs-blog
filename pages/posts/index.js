import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { posts } from 'data/posts'
import MainLayout from 'components/layouts/main'

function Posts({ posts }) {
    return (
        <MainLayout>
            <h1>List Posts</h1>

            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>

            <Image
                src="/avatar.png"
                alt="Picture of the author"
                width={150}
                height={150}
            />

        </MainLayout>
    );
}

export async function getStaticProps() {
    return {
        props: {
            posts: posts
        }
    }
}

export default Posts;