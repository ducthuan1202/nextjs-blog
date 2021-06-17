import React from 'react';
import Link from 'next/link'
import styles from './index.module.scss'

function Backlink({ withSeperator, link, text }) {
    
    return (
        <div>
            {withSeperator && <hr />}

            <Link href={link}>
                <a className={styles.action_buttons}>{text}</a>
            </Link>

            <span className={styles.reset_buttons}>Reload</span>
        </div>
    );
}

export default Backlink;