import React from 'react'
import {useRouter} from 'next/router'
import Backlink from './../../components/backlink'
import { posts } from './../../data/posts'

function Post({ post }) {

    const router = useRouter()
    console.log(router)

    if (!post) {
        return (
            <div>
                <h1>Post not found</h1>
                <Backlink link="/" text="Back to list posts" withSeperator />
            </div>
        )
    }

    return (
        <div>
            <h1>Post {post.title}</h1>
            <Backlink link="/" text="Back to list posts" withSeperator />
        </div>
    );
}

export async function getStaticPaths() {

    const paths = posts.map(post => ({
        params: { id: '/posts/' + post.id },
    }));

    return {
        paths: paths,
        fallback: true,
    }
}

export async function getStaticProps({ params }) {

    let post = posts.find(post => post.id == params.id)

    if (post == undefined) {
        post = null
    }

    return {
        props: {
            post: post
        }
    }
}

export default Post;