import React from 'react';

const Loading = () => {

    const style = {
        position: 'fixed',
        background: '#00000069',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };
    return (
        <>
            <div style={style}>
                <h1>loading...</h1>
            </div>
        </>
    );
}

export default Loading;