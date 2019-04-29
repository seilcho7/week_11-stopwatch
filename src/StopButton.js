import React from 'react';

function StopButton(props) {
    return (
        <button
            onClick={() => {
                props.stopTime();
            }}
        >STOP</button>
    )
}

export default StopButton;