import { AiOutlineArrowRight } from "react-icons/ai"
import { IconButton, Tooltip } from "@mui/material"
import { Link } from "react-router-dom"


function DebugButton() {
        
    return (
        <div className="absolute right-5 top-5">
            <Tooltip title="AcessarDashboard {DEBUG FUNCTION}" arrow>
                <IconButton>                    
                    <Link to='/auth/Dashboard' className="text-texto-white text-4xl">
                        <AiOutlineArrowRight/>                    
                    </Link>
                </IconButton>
            </Tooltip>
        </div>
    )
}

export default DebugButton
