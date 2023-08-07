import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from '../pages/login/Login.tsx'
import Register from '../pages/register/Register.tsx'
import FirstAccess from "../pages/firstAccess/FirstAccess.tsx";
import ForgotPassword from "../pages/forgotPassword/ForgotPassword.tsx";


import Index from "../Index.tsx";

const router = createBrowserRouter([
{
    path: '/',
    element: <Index/>,
    children: [    
        {
            path: '/First-Access',
            element: <FirstAccess/>,
        },    
        {
            path: '/Login',
            element: <Login/>,
        },    
        {
            path: '/Cadastro',
            element: <Register/>,
        },
        {
            path: '/Esqueci-Senha',
            element: <ForgotPassword/>,
        }
    ]
}

]);

function Routes() {
    return (
        <RouterProvider router={router}/>
    )
}

export default Routes