import React from "react"
import {Route, Switch} from "react-router-dom"

import Home from "./screens/Home"
import InfoProduct from "./screens/InfoProduct"

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/produto/:slug' component={InfoProduct} />
        </Switch>
    )
}

export default Routes;