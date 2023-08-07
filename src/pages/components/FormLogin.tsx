import { Box, FormControl, TextField } from "@mui/material"
import { Link } from "react-router-dom"
import { UserAdornment, PasswordAdornment } from "./Adornments"

function FormLogin() {
  return (    
        <Box component="form" className='m-5 font-paragraph flex-col justify-between'>
                <div className="mb-3">
            <FormControl className="bg-white" variant="filled">
                <TextField id="input-user" 
                label="Usuário" 
                variant="filled" 
                className="p-1 bg-white"
                required
                InputProps={{startAdornment: <UserAdornment/>}} 
                />
            </FormControl>
                </div>
                <div>
            <FormControl>
                <TextField id="Senha" 
                type="password" 
                label="Senha" 
                variant="filled"
                className="p-1 bg-white"
                required
                InputProps={{startAdornment: <PasswordAdornment/>}}/>
            </FormControl>
                </div>            
            <div className="mt-3">
                <Link to='/Esqueci-Senha' className="text-fundos-claro underline underline-offset-4 pr-5 hover:text-texto-white"> Esqueci minha senha </Link>
                <button className="bg-botão-idle hover:bg-botão-hover text-slate-500 hover:text-texto-dark font-paragraph py-2 px-4 rounded">Acessar</button>                
            </div>
        </Box>    
    )
}

export default FormLogin