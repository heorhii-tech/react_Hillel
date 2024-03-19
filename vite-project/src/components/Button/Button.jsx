import React from 'react';

function Button(props) {

    return (
        <button onClick={props.function}>{props.text}</button>
    );
}

export default Button;