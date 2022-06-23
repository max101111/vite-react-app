// App.jsx
import React, { Suspense, useState } from 'react'
import {
    BrowserRouter as Router,
    useRoutes
} from "react-router-dom"
import routes from '../src/router'

const RoutesGet = () => {
    return useRoutes(routes)
}
function App () {
    return <Suspense fallback={<div>12356</div>}>
        <Router>
            <RoutesGet />
        </Router>
    </Suspense>
}

export default App