import React from 'react'
import Backlink from './../../components/backlink'

function Page({ lucky_number }) {

    return (
        <div>
            <h1>My Number {lucky_number}</h1>

            <Backlink link="/" text="Back to home" withSeperator />
        </div>
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