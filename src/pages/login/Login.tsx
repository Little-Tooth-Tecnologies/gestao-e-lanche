import ErrorPopup from "./components/ErrorPopup.tsx"
import LogoComponent from "./components/LogoComponent.tsx";
import { Link } from "react-router-dom";
import { BiUserCircle, BiLockAlt } from "react-icons/bi";
import { LoginUtils } from "./utils/LoginUtils.ts";

import './css/login.css'


function Login() {
  
  const {user, password, formError, formSuccess, showDialog, setShowDialog,  handleUserChange, handlePasswordChange, sendUserData} = LoginUtils();

  return (    
      <section className='ModalI'>
        <ErrorPopup user={user} formSuccess={formSuccess} showDialog={showDialog} setShowDialog={setShowDialog}/>            
        <article className="LoginSection">
          <LogoComponent/>           
          <article className="container">
            <div className="user-select-none text-center">
              <h1 className="titulo neutra"> Tela de Acesso </h1>
              <span className="text-light subtitulo"> Gestão & Lanche</span>
              <hr className="linhaDetalhe"/>
            </div>            
            <form className="form container" onSubmit={sendUserData}>
                <label htmlFor="user" className="paragrafo neutra">Usuário</label>
              <div className="inputUser">
                <input type="text" placeholder='Usuario' value={user} onChange={handleUserChange} className={formError ? "form-control bg-danger border-0 text-light danger" : "form-control" }/>
                <BiUserCircle className={formError? "icone text-light" : "icone"}/>                
              </div>              
                <label htmlFor="password" className='paragrafo neutra' >Senha</label>
              <div className="inputSenha">
                <input type="password" placeholder='*******' value={password} onChange={handlePasswordChange} className={formError ? "form-control bg-danger border-0 text-light  danger" : "form-control"}/>
                <BiLockAlt className={formError? "icone text-light" : "icone"}/>
              </div>
              <div className="flex flex-row">
                <Link to='/EsqueciSenha' className="paragrafo neutra password">Esqueci minha senha</Link>
                <button type='submit' className="btn btnBG ms-3">Acessar</button>
              </div>
            </form>             
          </article>          
        </article>      
      </section>    
  )
}


export default Login