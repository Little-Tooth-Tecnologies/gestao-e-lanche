import { Box, Button, FormControl, TextField } from "@mui/material"
import { CommonAdornment, EmailAdornment, PasswordAdornment, UserAdornment } from "./Adornments"
import { AiOutlineDelete, AiOutlineSend } from "react-icons/ai"

function FormRegister() {
  return (
    <Box component='form' className='m-5 font-paragraph flex-col justify-between'>
        <div className="mb-3 flex gap-5">
            <FormControl className="bg-white" variant='filled'>
                <TextField id='input-name'
                label='Nome'
                variant='filled'
                className='p-1 bg-white'
                required
                InputProps={{startAdornment: <CommonAdornment/>}}
                />
            </FormControl>
            <FormControl>
              <TextField id='input-surName'
              label='Sobrenome'
              variant='filled'
              className='p-1 bg-white'
              required
              InputProps={{startAdornment: <CommonAdornment/>}}
              />
            </FormControl>
        </div>
        <div className="mb-3 flex gap-5">
            <FormControl className="bg-white" variant='filled'>
                <TextField id='input-user'
                label='Usuário'
                variant='filled'
                className='p-1 bg-white'
                required
                InputProps={{startAdornment: <UserAdornment/>}}
                />
            </FormControl>
            <FormControl>
              <TextField id='input-email'
              label='E-mail'
              variant='filled'
              className='p-1 bg-white'
              required
              InputProps={{startAdornment: <EmailAdornment/>}}
              />
            </FormControl>
        </div>
        <div className="flex">
            <FormControl>
                <TextField id='input-password'
                type='password'
                label='Senha'
                variant='filled'
                className='p-1 bg-white'
                required
                InputProps={{startAdornment: <PasswordAdornment/>}}
                />
            </FormControl>
            <div className="flex gap-5 ml-5 h-10 mt-2 ">
              <Button type="reset" variant="contained" color="warning" startIcon={<AiOutlineDelete/>}>Resetar</Button>
              <Button type="submit" variant="contained" startIcon={<AiOutlineSend/>}>Enviar</Button>
            </div>

        </div>        
    </Box>
  )
}

export default FormRegister