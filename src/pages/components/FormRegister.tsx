import { Box, FormControl, TextField } from "@mui/material"

function FormRegister() {
  return (
    <Box component='form' className='m-5 font-paragraph flex-col justify-between'>
        <div className="mb-3">
            <FormControl className="bg-white" variant='filled'>
                <TextField id='input-name'
                label='Nome'
                variant='filled'
                className='p-1 bg-white'
                required                
                />
            </FormControl>
        </div>
    </Box>
  )
}

export default FormRegister