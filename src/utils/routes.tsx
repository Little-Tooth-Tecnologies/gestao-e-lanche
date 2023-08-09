import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from '../pages/login/Login.tsx'
import Register from '../pages/register/Register.tsx'
import FirstAccess from "../pages/firstAccess/FirstAccess.tsx";
import ForgotPassword from "../pages/forgotPassword/ForgotPassword.tsx";
import Dashboard from "../pages/dashboard/Dashboard.tsx";
import DashBoardHome from '../pages/dashboard/pages/DashBoardHome.tsx'

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
        },
        {
            path: '/auth',
            children: [
                {
                    path: 'Dashboard',
                    element: <Dashboard/>,
                    children: [
                        {
                            path: 'Home',
                            element: <DashBoardHome/>
                        },
                        {
                            path: 'Cadastro',
                            children: [
                                {
                                    path: 'Empresa'                                
                                },
                                {
                                    path: 'Funcionarios'
                                },
                                {
                                    path: 'Produtos'
                                },
                                {
                                    path: 'Pedidos'
                                }
                            ]
                        },
                        {
                            path: 'Estoque',
                            children: [
                                {
                                path: 'Produtos',
                                children: [{path: ":id/:nome"},{path: "Editar/:id/:nome"}]
                                }
                            ]
                        },
                        {
                            path: 'Funcionarios',
                            children: [{path: ':id/:nome'}, {path: 'Editar/:id/:nome'}]   
                        },
                        {
                            path: 'Empresa',
                            children: [{path: 'Editar/:nome'}]
                        },
                        {
                            path: 'Pedidos',
                            children: [{path: ':id/:comanda'}, {path: 'Finalizados'}, {path: 'Editar/:id/:comanda'}]
                        },
                        {
                            path: "Configurações",
                            children: [{path: "Perfil"}, {path: "Conta"}, {path: "Notificações"}]
                        },
                        {
                            path: "Suporte",
                            children: [{path: "Chat/:id"}, {path: "Chamado/Novo"}, {path: "Chamado/:id"}]                            
                        },
                        {
                            path: "Sobre-Nós"                            
                        }
                        ]
                        }
                    ]
        }
    ]
    
}])


function Routes() {
    return (
        <RouterProvider router={router}/>
    )
}

export default Routes