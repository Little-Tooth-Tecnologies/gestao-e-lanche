import ErrorPopup from "./components/ErrorPopup.tsx"
import LogoComponent from "./components/LogoComponent.tsx";
import { Link } from "react-router-dom";
import {AiFillUnlock, AiOutlineUserAdd} from 'react-icons/ai'
import { BiUserCircle, BiLockAlt } from "react-icons/bi";
import { LoginUtils } from "./utils/LoginUtils.ts";

import './css/login.css'
import { OverlayTrigger, Tooltip } from "react-bootstrap";


function Login() {
  
  const {
    user, 
    password, 
    formError, 
    formSuccess, 
    showDialog, 
    setShowDialog,  
    handleUserChange, 
    handlePasswordChange, 
    sendUserData} = LoginUtils();


    const popoverSenha = (
      <Tooltip>
        <span className="paragrafo text-light password">Esqueci minha senha</span>
      </Tooltip>
    );    

    const popoverConta = (
      <Tooltip>
        <span className="paragrafo text-light password">Não tenho uma Conta</span>
      </Tooltip>
    )
  

  return (    
      <section className='ModalI'>
        <ErrorPopup user={user} formSuccess={formSuccess} showDialog={showDialog} setShowDialog={setShowDialog}/>            
        <article className="LoginSection">
          <LogoComponent/>           
          <article className="container">
            <div className="user-select-none text-center titleDiv">
              <h1 className="titulo text-light"> Tela de Acesso </h1>
              <span className="text-light subtitulo"> Gestão & Lanche</span>
              <hr className="linhaDetalhe"/>
            </div>            
            <form className="form container" onSubmit={sendUserData}>
                <label htmlFor="user" className="paragrafo neutra">Usuário</label>
              <div className="input">
                <input 
                type="text" 
                autoComplete="true" 
                placeholder='Usuario' 
                value={user} 
                onChange={handleUserChange} 
                className={formError ? "form-control bg-danger border-0 text-light danger" : "form-control" }
                required/>
                <BiUserCircle className={formError? "icone text-light" : "icone"}/>                
              </div>              
                <label htmlFor="password" className='paragrafo neutra' >Senha</label>
              <div className="input">
                <input 
                type="password" 
                placeholder='*******' 
                value={password} 
                onChange={handlePasswordChange} 
                className={formError ? "form-control bg-danger border-0 text-light  danger" : "form-control"}
                required/>
                <BiLockAlt className={formError? "icone text-light" : "icone"}/>
              </div>
              <div className="RowIcons">
                {EsqueciSenha()}              
                {CriarConta()}
              </div>
              <hr className="linhaDetalhe"/>
              <div className="btn-end mt-3">
                <button type='submit' className="btn btnBG">Acessar</button>
              </div>
            </form>             
          </article>          
        </article>      
      </section>    
  )  

  function CriarConta() {
    return <OverlayTrigger placement="top" trigger='hover' overlay={popoverConta}>
      <Link to='/Cadastro'><button type="button" className="btn"><AiOutlineUserAdd className="icon"/></button></Link>
    </OverlayTrigger>;
  }
  
  function EsqueciSenha() {
    return <>
      <OverlayTrigger placement="bottom" trigger='hover' delay={{ show: 250, hide: 550 }} overlay={popoverSenha}>
        <Link to='/EsqueciSenha'><button className="btn" type="button"><AiFillUnlock className="icon"/></button></Link>
      </OverlayTrigger>      
    </>
    
  }
}


export default Login