import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

import LandingPage from "./pages/Landing"

export default function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={LandingPage} />
        </BrowserRouter>
    )
}
