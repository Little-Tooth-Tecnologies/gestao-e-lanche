import { AiOutlineArrowLeft } from "react-icons/ai"
import { IconButton, Tooltip } from "@mui/material"
import { useNavigate } from "react-router-dom"



function BackButton() {
    
    const navigate = useNavigate();
    
    const HandleBack = () => {
        navigate(-1);
    }
    
    return (
        <div className="absolute left-5 top-5">
            <Tooltip title="Voltar" arrow>
                <IconButton>                    
                    <div className="text-texto-white text-4xl" onClick={HandleBack}>
                        <AiOutlineArrowLeft/>                    
                    </div>
                </IconButton>
            </Tooltip>
        </div>
    )
}

export default BackButton
