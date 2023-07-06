import { Toast } from "react-bootstrap";
import { ToastContainer } from "react-bootstrap";
import { LoginUtils } from "../utils/LoginUtils.ts"


function ErrorPopup() {    

    const {formSuccess, showDialog, setShowDialog} = LoginUtils();
    
    return (
    <ToastContainer position="top-center" style={{ zIndex: 1 , padding: 10}}>
        <Toast bg='danger' show={formSuccess}>
            <Toast.Body>
                <h5 className="text-light">Atenção!!</h5>                
                {formSuccess === false ? 
                (<span className="text-light">Usuário ou senha incorretos</span>)
                : 
                (<span className="text-light"> Logado! </span>)}
            </Toast.Body>
        </Toast>
    </ToastContainer>
    )
}

export default ErrorPopup