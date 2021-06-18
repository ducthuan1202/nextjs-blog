import React from 'react'
import Head from 'next/head'
import MainLayout from 'components/layouts/main'

function Page({ lucky_number }) {

    return (
        <MainLayout>
            <Head>
                <title>Lucky number</title>
            </Head>
            <h1>My Number {lucky_number}</h1>
        </MainLayout>
    );
}

// Server-side Rendering (Dynamic Rendering)
// Trang sẽ được render theo mỗi lần request
export async function getServerSideProps() {
    const lucky_number = Math.random()
    return {
        props: {
            lucky_number: lucky_number
        }
    }
}

export default Page;