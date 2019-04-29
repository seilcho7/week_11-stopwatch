import React from 'react';

function StartButton(props) {
    return (
        <button
            onClick={() => {
                props.startTime();
            }}
        >START</button>
    )
}

export default StartButton;