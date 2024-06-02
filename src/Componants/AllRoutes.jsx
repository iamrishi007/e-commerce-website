import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Authcontext/AuthProvider";
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Products from "../Pages/Products";

function PrivateRoute({ children }) {
     const { authDetailes } = useContext(AuthContext);

     if (!authDetailes.isLoginIn) {
          return <Navigate to="/login" />;
     }

     return children;
}

function AllRoutes() {
     return (
          <div>
               <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={
                         <PrivateRoute>
                              <Home />
                         </PrivateRoute>
                    } />
                    <Route path="/products" element={
                         <PrivateRoute>
                              <Products />
                         </PrivateRoute>
                    } />
               </Routes>
          </div>
     );
}

export default AllRoutes;
