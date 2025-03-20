import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({})

import {api} from "../server"

function AuthProvider({children}) {
  const [data, setData] = useState({})
  
  async function signIn({email, password}) {
    try {
      const response = await api.post("/sessions", {email, password})
      
      const {user} = response.data

      localStorage.setItem("user", JSON.stringify(user))

      setData({user})

      return {success: true}
    } catch (error) {
      if(error.response) {
        return {success: false, message: error.response.data.message}
      } 
    }
  }

  async function signOut() {
    localStorage.removeItem("user")
    localStorage.removeItem("@favorites")
    localStorage.removeItem("@dish")
    setData({})
  }

  async function create({name, email, password}) {

    try {
      await api.post("/user", {name, email, password})
      return {success: true, message: "Usuário criado com sucesso"}
    } 
    catch (error) {
      if(error.response) {
        return {success: false, message: error.response.data.message}
      } 
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("user")

    if(user) {
      setData({user: JSON.parse(user)})
    }

  }, [])

  return (
    <AuthContext.Provider 
    value={{
      user: data.user,
      signIn,
      signOut,
      create
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export {AuthProvider, useAuth}