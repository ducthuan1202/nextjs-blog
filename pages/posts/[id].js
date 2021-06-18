import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { posts } from 'data/posts'
import MainLayout from 'components/layouts/main'
import PageNotFound from 'components/pageErrors/404'
import Loading from 'components/preload'

function Post({ post }) {

    const [state, setState] = useState({
        pageLoading: true,
    })

    useEffect(() => {
        console.log('use efffect')
        setTimeout(() => {
            console.log('change loading')
            setState({...state, pageLoading: false})
        }, 1e3);
    }, [])

    const router = useRouter()
    console.log(router)

    if (state.pageLoading) {
        return (
            <Loading/>
        )
    }

    if (!post) {
        return (
            <PageNotFound/>
        )
    }

    return (
        <MainLayout>
            <Head>
                <title>{post.title}</title>
            </Head>
            <h1>Post {post.title}</h1>
        </MainLayout>
    );
}

// Static Generation
// khi đường dẫn phụ thuộc vào dữ liệu bên ngoài
export async function getStaticPaths() {

    const paths = posts.map(post => ({
        params: { id: '/posts/' + post.id },
    }));

    return {
        paths: paths,
        fallback: true,
    }
}

// Static Generation 
// khi nội dung phụ thuộc vào dữ liệu bên ngoài
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