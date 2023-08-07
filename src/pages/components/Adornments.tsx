import { InputAdornment, Select } from "@mui/material"
import { AiOutlineUser, AiOutlineUnlock } from "react-icons/ai"

export function UserAdornment() {
    return(
        <InputAdornment position="start">
            <AiOutlineUser/>
        </InputAdornment>
    )
}

export function PasswordAdornment() {
    return (
        <InputAdornment position="start">
            <AiOutlineUnlock/>    
        </InputAdornment>
    )
}

export function RoleAdornment() {
    return (
        <InputAdornment position="start">
            <Select 
            labelId="role-select-label"
            id="role-select"
            label="Role"
            >
                <option value="admin">Administrador</option>
                <option value="user">Usuário</option>
            </Select>            
        </InputAdornment>
    )
}