import { Button } from "@chakra-ui/react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../Authcontext/AuthProvider"

const links = [

     {
          to: "/",
          label: "Home"
     },
     {
          to: "/products",
          label: "Products"
     },
     {
          to: "/login",
          label: "Login"
     },

]

function Navbar() {

     const {logout}=useContext(AuthContext)

     return (

          <>


               <div style={{ display: "flex", justifyContent: 'space-around', backgroundColor: "#C4F1F9", padding: "10px", fontSize: '20px' }}>
                    {links.map((link) => (
                         <Link key={link.to} to={link.to}>
                              {link.label}
                         </Link>

                    ))}
                    <Button colorScheme='red' variant='outline' onClick={logout}>
                         Logout
                        
                    </Button>
               </div>

          </>



     )

}

export default Navbar