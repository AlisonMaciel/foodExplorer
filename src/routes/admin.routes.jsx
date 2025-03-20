import {Routes, Route} from "react-router-dom"

import { Details } from "../page/Details"
import { Home } from "../page/Home"
import { Create } from "../page/Create"
import { Update } from "../page/Update"
import { Orders } from "../page/Orders"
import { Favorites } from "../page/Favorites"

export function AdminRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="details/:id" element={<Details/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/update/:id" element={<Update/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
    )
}