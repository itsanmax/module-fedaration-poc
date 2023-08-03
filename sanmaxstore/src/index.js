
import React from 'react';

import ReactDOM from 'react-dom';

const PdtList = React.lazy(() => import("productlist/pdtlist"));

const PdtSearch = React.lazy(() => import("productsearch/pdtsearch"));

const PdtCheckout = React.lazy(() => import("productcheckout/pdtcheckout"));


//const RemoteApp = React.lazy(() => import("app2/App"));

ReactDOM.render(
    <>
        <h1>Welcome to Sanmax store!</h1>
        <React.Suspense fallback="Loading Products...">
            <PdtList></PdtList>
            <br/><br/>
            <PdtSearch></PdtSearch>
            <br/><br/>
            <PdtCheckout></PdtCheckout>
        </React.Suspense>
        
    </>,
    document.getElementById('root')
)