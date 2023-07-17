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
        <Link to='/EsqueciSenha' className="paragrafo text-light password">Esqueci minha senha</Link>
      </Tooltip>
    );    

    const popoverConta = (
      <Tooltip>
        <Link to='/Cadastro' className="paragrafo text-light password">Não tenho uma Conta</Link>
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
              <div className="inputUser">
                <input type="text" autoComplete="true" placeholder='Usuario' value={user} onChange={handleUserChange} className={formError ? "form-control bg-danger border-0 text-light danger" : "form-control" }/>
                <BiUserCircle className={formError? "icone text-light" : "icone"}/>                
              </div>              
                <label htmlFor="password" className='paragrafo neutra' >Senha</label>
              <div className="inputSenha">
                <input type="password" placeholder='*******' value={password} onChange={handlePasswordChange} className={formError ? "form-control bg-danger border-0 text-light  danger" : "form-control"}/>
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
    return <OverlayTrigger placement="top" trigger='click' overlay={popoverConta}>
      <button type="button" className="btn"><AiOutlineUserAdd className="icon"/></button>
    </OverlayTrigger>;
  }
  
  function EsqueciSenha() {
    return <>
      <OverlayTrigger placement="bottom" trigger='click' delay={{ show: 250, hide: 550 }} overlay={popoverSenha}>
        <button className="btn" type="button"><AiFillUnlock className="icon"/></button>
      </OverlayTrigger>
      
    </>
    
  }
}


export default Login