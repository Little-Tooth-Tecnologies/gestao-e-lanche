import { Avatar, Badge, FormControl, IconButton, TextField, Tooltip } from "@mui/material"
import { FiBell } from "react-icons/fi"
import { SearchAdornment } from "../../../components/Adornments"
import { useState } from "react"

function NavMenu() {

    // Função Para Debug
    const [notifyData, setNotifyData] = useState(0)

    // Função para Debug
    const setData = () => {
        setNotifyData(notifyData + 1)
    }

    const user = "Fulano"
    const role = "Desenvolvedor"


  return (
    <section className="navBarRem">
        <article className="bg-gray-200 flex justify-between items-center">
            <div className="flex flex-row items-center ml-5">
                <div>
                <IconButton color="inherit" onClick={setData}>
                    <Badge badgeContent={notifyData} color="error">
                        <FiBell/>
                    </Badge>
                </IconButton>
                </div>
                {notifyData === 0 ? ( 
                    <div>
                        <span> Sem Notificações</span>
                    </div>
                ) : (
                    <div>                    
                    <span> Atenção!! <strong className="text-red-500">{notifyData}</strong> Notificações</span>
                </div>
                )}
                <div className="ml-5">
                <FormControl>
                    <TextField id="search"
                        label="Pesquisar"
                        placeholder="Módulo Administrativo"
                        variant="filled"
                        className="p-2 bg-slate-200 w-96"
                        InputProps={{startAdornment: <SearchAdornment/>}}
                        />
                </FormControl>
                </div>
            </div>        

        <div className="flex flex-row items-center justify-center mr-16">
            <Tooltip title="Meu Perfil" arrow>
            <Avatar src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80" 
            sx={{ width: 55, height: 55}} 
            className="hover:scale-110"
            alt="Avatar"            
            />
            </Tooltip>
        <div className="flex flex-col m-5">
            <h3 className="font-title text-xl underline underline-offset-4">{user}</h3>
            <span className="font-paragraph">{role}</span>            
        </div>   
        </div>
        </article>            
    </section>
    )
}

export default NavMenu