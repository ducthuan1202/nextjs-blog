import React from 'react';
import Link from 'next/link'

function Backlink({ withSeperator, link, text }) {
    
    return (
        <>
            {withSeperator && <hr />}
            <Link href={link}>
                <a>{text}</a>
            </Link>
        </>
    );
}

export default Backlink;