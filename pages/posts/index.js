import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { posts } from './../../data/posts'
import Backlink from './../../components/backlink'

import styles from './index.module.scss'


function Posts({ posts }) {
    return (
        <div>
            <h1>List Posts</h1>
            <Image
                src="/me.png"
                alt="Picture of the author"
                width={150}
                height={150}
            />
           
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>

            <span className={styles.action_buttons}>Click me</span>
            <span className={styles.reset_buttons}>Try now</span>

            <Backlink link="/" text="Back to home" withSeperator />

        </div>
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