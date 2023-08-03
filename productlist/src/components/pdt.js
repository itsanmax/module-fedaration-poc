
import React from 'react';

const Pdt = (props) => {

    // addPdt = (pdtName) => {
    //     console.log("==== ", pdtName);
    // }

// <button onClick={addPdt}>Add</button>
    return (
        <>
            <span>{props.name}</span>
            <button>Add</button>
        </>
    );
}

export default Pdt;