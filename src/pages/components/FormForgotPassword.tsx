import { Box, Button, FormControl, TextField, Tooltip } from "@mui/material"
import { EmailAdornment, UserAdornment } from "./Adornments"
import { AiOutlineDelete, AiOutlineSend } from "react-icons/ai"

function FormForgotPassword() {
  return (
    <Box component="form" className="m-5 font-paragraph flex-col justify-between">      
      <div className="mb-3 flex gap-5">
        <FormControl className="bg-white" variant="filled">
          <TextField
            id="input-email"
            label="E-mail"
            variant="filled"
            className="p-1 bg-white"
            
            InputProps={{ startAdornment: <EmailAdornment /> }}
          />
        </FormControl>
      </div>
      <div className="mb-3 flex gap-5">
        <FormControl>
          <TextField id="input-user"
            label="Usuário"
            variant="filled"
            className="p-1 bg-white"            
            InputProps={{ startAdornment: <UserAdornment /> }}
            />
        </FormControl>    
      </div>         
      <div className="flex justify-end mt-10 mr-7 gap-3">
        <Tooltip title="Limpar Campos" arrow>
          <Button type='reset' variant="contained" color="warning" startIcon={<AiOutlineDelete/>}>Resetar</Button>
        </Tooltip>
        <Tooltip title="Enviar Dados" arrow placement="top">
          <Button type='submit' variant="contained" color="primary" startIcon={<AiOutlineSend/>}>Enviar</Button>
        </Tooltip>
        </div>               
    </Box>
  )
}

export default FormForgotPassword