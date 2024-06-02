/*
1-create Authcontext

2-provide Authcontext

3-consume AuthContext

*/

import { createContext, useState } from "react"

export const AuthContext = createContext()

function AuthProvider({ children }) {

     const [authDetailes, setAuthDetailes] = useState({
          isLoginIn: false,
          token: null
     })

     function login(token) {
          setAuthDetailes({
               isLoginIn:true,
               token:token
          })

     }

     function logout(token) {

          setAuthDetailes({
               isLoginIn:false,
               token:null
          })
          
     }


     return (
          <>
               <AuthContext.Provider value={{ authDetailes, login, logout }}>
                    {children}
               </AuthContext.Provider>
          </>
     )
}

export default AuthProvider