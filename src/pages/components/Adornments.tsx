import { InputAdornment, Select } from "@mui/material"
import { AiOutlineUser, AiOutlineUnlock , AiOutlineRight, AiOutlineMail} from "react-icons/ai"
import { FiSearch } from "react-icons/fi"

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

export function CommonAdornment() {
    return (
        <InputAdornment position="start">
            <AiOutlineRight/>
        </InputAdornment>
    )
}

export function EmailAdornment() {
    return (
        <InputAdornment position="start">
            <AiOutlineMail/>
        </InputAdornment>
    )
}

export function SearchAdornment() {
    return (
        <InputAdornment position="start">
            <FiSearch/>
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

