import { BrowserRouter } from "react-router-dom";

import { USER_ROLE } from "../utils/roles";

import {useAuth} from "../hooks/auth"

import {AdminRoutes} from "./admin.routes";
import {CustomerRoutes} from "./customer.routes"
import {AuthRoutes} from "./auth.routes";

export function Routes() {
  const {user} = useAuth()
  
  function AcessRoutes() {
    if(user.role === USER_ROLE.ADMIN) {
      return <AdminRoutes/>
    }
    if(user.role === USER_ROLE.CUSTOMER) {
      return <CustomerRoutes/>
    } 
    else {
      return <CustomerRoutes/>
    }
  }

    return (
        <BrowserRouter>
          {user ? <AcessRoutes/> : <AuthRoutes/>}
        </BrowserRouter>
    )
}