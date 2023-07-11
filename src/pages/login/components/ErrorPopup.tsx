import { Toast } from "react-bootstrap";
import { ToastContainer } from "react-bootstrap";

function ErrorPopup(props: any) {        
    return (    
        <ToastContainer position="top-center" style={{ zIndex: 1 , padding: 10}}>
            <Toast bg={props.formSuccess? 'success' : 'danger'}  show={props.showDialog} delay={150} autohide>
                <Toast.Header>
                    <strong className="me-auto">Aviso</strong>
                </Toast.Header>
                <Toast.Body>                           
                    {props.formSuccess === false ? 
                    (<span className="text-light">Usuário ou senha incorretos</span>)
                    : 
                    (<span className="text-light"> Usuário {props.user} Logado! </span>)}                    
                </Toast.Body>
            </Toast>
        </ToastContainer>    
    )
}

export default ErrorPopup