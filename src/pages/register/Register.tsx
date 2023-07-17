import { BiLockAlt, BiUserCircle } from "react-icons/bi"
import LogoComponent from "../login/components/LogoComponent"

function Register() {
  return (
<section className='ModalI'>
        
        <article className="LoginSection">
          <LogoComponent/>           
          <article className="container">
            <div className="user-select-none text-center titleDiv">
              <h1 className="titulo text-light"> Tela de Cadastro </h1>
              <span className="text-light subtitulo"> Gestão & Lanche</span>
              <hr className="linhaDetalhe"/>
            </div>            
            <form className="form container">
                <label htmlFor="user" className="paragrafo neutra"> <BiUserCircle className='mb-1'/> Seu Nome</label>
              <div className="input-group gap-3">
                <input type="text" name="user" id="user" className="form-text form-control" placeholder="Digite seu nome"/>                
                <input type="text" name="user" id="user" className="form-text form-control" placeholder="Digite seu sobrenome"/>
              </div>
              
              <label htmlFor="login" className='paragrafo neutra mt-3'><BiUserCircle className='mb-1'/> Usuario</label>
              <div className="input-group gap-3">
                <input type="text" name="login" id="login" className="form-text form-control" placeholder="Digite seu usuario"/>                
                <input type="email" name="email" id="email" className="form-text form-control" placeholder="Digite seu email"/>                
              </div>            

                <label htmlFor="senha" className='paragrafo neutra mt-3'><BiLockAlt className='mb-1'/> Senha</label>
              <div className="input-group mb-5">
                <input type="password" name="senha" id="senha" className="form-text form-control" placeholder="Digite sua senha"/>                
              </div>  

              <div className="btn-end gap-2">
                <button type='reset' className="btn btnBG p-2">Limpar</button>
                <button type='submit' className="btn btnBG p-2">Cadastrar</button>
              </div>
            </form>
          </article>          
        </article>      
      </section> 
  )
}

export default Register