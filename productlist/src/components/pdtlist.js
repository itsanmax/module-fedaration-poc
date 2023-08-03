
import React from 'react';

import Pdt from './pdt'

const Pdtlist = (props) => {

    return(
        <div>
            Product list module:
            <ul>
                <li>
                    <Pdt name="Product 1"/>
                </li>
                <li>
                <Pdt name="Product 2"/>
                </li>
                <li>
                    <span>Product 3</span>
                    <button>Add</button>
                </li>
            </ul>
        </div>
    );
}

export default Pdtlist;