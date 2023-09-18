import { Box, Button, FormControl, TextField } from "@mui/material"
import { CommonAdornment, EmailAdornment, PasswordAdornment, UserAdornment } from "./Adornments"
import { AiOutlineDelete, AiOutlineSend } from "react-icons/ai"

import { RegisterUtils } from "../../utils/FormUtils.ts"

function FormRegister() {

  const {registerData, registerErrors, validate, handleChange} = RegisterUtils()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      console.log(registerData + "Enviado com sucesso!")
    } else {
      console.log("Erro ao enviar!")      
    }
  }

  return (
    <Box component='form' noValidate onSubmit={handleSubmit} className='m-5 font-paragraph flex-col justify-between'>
        <div className="mb-3 flex gap-5">
            <FormControl className="bg-white" variant='filled'>
                <TextField 
                id='name'
                label='Nome'
                variant='filled'
                className='p-1 bg-white'
                value={registerData.name}
                onChange={handleChange}
                error={registerErrors.name ? true : false}
                helperText={registerErrors.name}                
                required
                InputProps={{startAdornment: <CommonAdornment/>}}
                />
            </FormControl>
            <FormControl>
              <TextField 
              id='surName'
              label='Sobrenome'
              variant='filled'
              className='p-1 bg-white'              
              value={registerData.surName}              
              onChange={handleChange}
              error={registerErrors.surName ? true : false}
              helperText={registerErrors.surName}
              required
              InputProps={{startAdornment: <CommonAdornment/>}}
              />
            </FormControl>
        </div>
        <div className="mb-3 flex gap-5">
            <FormControl className="bg-white" variant='filled'>
                <TextField 
                id='user'
                label='Usuário'
                variant='filled'
                className='p-1 bg-white'
                value={registerData.user}
                onChange={handleChange}     
                error={registerErrors.user ? true : false}
                helperText={registerErrors.user}                         
                required
                InputProps={{startAdornment: <UserAdornment/>}}
                />
            </FormControl>
            <FormControl>
              <TextField 
              id='email'
              label='E-mail'
              variant='filled'
              className='p-1 bg-white'
              value={registerData.email}
              onChange={handleChange}   
              error={registerErrors.email ? true : false}
              helperText={registerErrors.email}           
              required
              InputProps={{startAdornment: <EmailAdornment/>}}
              />
            </FormControl>
        </div>
        <div className="flex">
            <FormControl>
                <TextField 
                id='password'
                type='password'
                label='Senha'
                variant='filled'
                className='p-1 bg-white'
                value={registerData.password}
                onChange={handleChange}
                error={registerErrors.password ? true : false}
                helperText={registerErrors.password}
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