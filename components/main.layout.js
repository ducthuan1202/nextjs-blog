import React from 'react';
import Link from 'next/link'
import Backlink from 'components/backlink'

const MainLayout = ({ children }) => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href="/posts">
                            <a>Posts</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/page">
                            <a>Page my number</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div>{children}</div>
            
            <div>
            <Backlink link="/" text="Back to home" withSeperator />
            </div>
        </div>
    );
}

export default MainLayout;