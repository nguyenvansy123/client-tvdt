import React from 'react'

export const EnterKeyListener = (...props) => {
   const { onEnterPressed,compoment} = props
    const handleKeyDown = (event) => {
        console.log("hello")
        if (event.key === 'Enter') {
            onEnterPressed();
        }
    };

    return (
        <div onKeyDown={handleKeyDown} >
            {compoment}
            {console.log(compoment)}
        </div>
    );
}
