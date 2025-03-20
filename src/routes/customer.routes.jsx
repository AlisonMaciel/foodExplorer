import {Routes, Route} from "react-router-dom"

import { Details } from "../page/Details"
import { Home } from "../page/Home"
import { Orders } from "../page/Orders"
import { Favorites } from "../page/Favorites"

export function CustomerRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/details/:id" element={<Details/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
    )
}