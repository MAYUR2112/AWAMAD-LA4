import React from 'react';


function Header(props) {
    return (
        <div style={{margin:100}}>
            <h1>{props.msg}</h1>
        </div>
    );
}

export default Header;