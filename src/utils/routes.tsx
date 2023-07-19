import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from '../pages/login/Login.tsx'
import Register from '../pages/register/Register.tsx'
import EsqueciSenha from '../pages/register/EsqueciSenha.tsx'

import Index from "../Index.tsx";

const router = createBrowserRouter([
{
    path: '/',
    element: <Index/>,
    children: [
        {
            path: '/Login',
            element: <Login/>,
        },    
        {
            path: '/Cadastro',
            element: <Register/>,
        },
        {
            path: '/EsqueciSenha',
            element: <EsqueciSenha/>
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