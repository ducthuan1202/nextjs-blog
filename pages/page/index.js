import React from 'react'
import MainLayout from 'components/main.layout'

function Page({ lucky_number }) {

    return (
        <MainLayout>
            <h1>My Number {lucky_number}</h1>
        </MainLayout>
    );
}

export async function getServerSideProps() {
    const lucky_number = Math.random()
    return {
        props: {
            lucky_number: lucky_number
        }
    }
}

export default Page;