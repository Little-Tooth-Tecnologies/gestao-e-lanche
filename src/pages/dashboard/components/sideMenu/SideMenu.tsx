import { Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Tooltip } from "@mui/material"
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai"
import { LuLayoutDashboard } from "react-icons/lu"
import { BsClipboard } from "react-icons/bs"
import { BiBuoy, BiLogOut } from "react-icons/bi"
import { HiOutlineCog } from "react-icons/hi"
import { FiMoon } from "react-icons/fi"
import { Link } from "react-router-dom"

const Logo = '/png/LogoEmpresa.png'

function SideMenu() {
    const empresa = "{Empresa}"

    
  return (    
    <section className="bg-fundos-escuro flex w-60">
        <Toolbar>                            
        <List className="text-texto-white">
            <div className="flex justify-between">
                <Tooltip title="Configurações" arrow>
                <IconButton className="absolute right-5 mt-2">
                    <HiOutlineCog className="text-botão-dash hover:scale-125"/>
                </IconButton>
                </Tooltip>
                <Tooltip title="Modo Noturno" arrow>
                <IconButton className="absolute left-5 mt-2">                    
                    <FiMoon className="text-botão-dash hover:scale-125"/>
                </IconButton>
                </Tooltip>
            </div>
            <ListItem>
                <div className="flex flex-col text-center">
                    <img src={Logo} alt="Logo" className="w-32 h-32 rounded-full hover:scale-95"/>
                    <span className="text-center mt-2 font-title">{empresa}</span>
                    <span className="text-sm text-slate-500 font-body">Gestão & Lanches</span>
                </div>
            </ListItem>

        <Divider/>
        
        <div className="bg-botão-dash rounded-md">
        <ListItemButton alignItems="center">
            <ListItemIcon>
                <AiFillHome className="text-texto-white"/>
            </ListItemIcon>            
            <Link to="Home" className="font-body absolute left-12">Inicio</Link>
        </ListItemButton>            
        </div>
        <Divider/>

        <ListItem >
            <ListItemText className="text-center text-slate-400" primary="Administrativo" />
        </ListItem>

        <div className="bg-botão-dash rounded-md">
        <ListItemButton>
            <ListItemIcon>
                <LuLayoutDashboard className="text-texto-white"/>
            </ListItemIcon>
            <Link to="Cadastro" className="font-body absolute left-12">Cadastro</Link>
        </ListItemButton>
        </div>

        <Divider />

        <ListItem>
            <ListItemText className="text-center text-slate-400" primary="Pedidos e Suporte" />
        </ListItem>

        <div className="bg-botão-dash rounded-md">
        <ListItemButton>
            <ListItemIcon>
                <BsClipboard className="text-texto-white"/>
            </ListItemIcon>
            <Link to="Pedidos" className="font-body absolute left-12">Pedidos</Link>
        </ListItemButton>
        </div>

        <div className="bg-botão-dash rounded-md mt-3">
        <ListItemButton >
            <ListItemIcon>
                <BiBuoy className="text-texto-white"/>
            </ListItemIcon>
            <Link to="Suporte" className="font-body absolute left-12">Suporte</Link>
        </ListItemButton>
        </div>
        <Divider />

        <ListItem>
            <ListItemText className="text-center text-slate-400 text-sm" primary="Gestão e Lanche" />
        </ListItem>

        <div className="bg-botão-dash rounded-md">
        <ListItemButton>
            <ListItemIcon >
                <AiFillInfoCircle className="text-texto-white"/>
            </ListItemIcon>
            <Link to="Sobre-Nós" className="font-body absolute left-12">Sobre Nos</Link>
        </ListItemButton>
        </div>

        <Divider/>


        <div className="bg-botão-dash rounded-md mb-5 mt-2">
        <ListItemButton>
            <ListItemIcon>
                <BiLogOut className="text-texto-white"/>
            </ListItemIcon>
            <Link to="/./First-Access" className="font-body absolute left-12">Sair</Link>
        </ListItemButton>
        </div>
        </List>
        </Toolbar>        
    </section>
    ) 
}

export default SideMenu