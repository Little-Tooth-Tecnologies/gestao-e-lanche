import { Link } from "react-router-dom"
import LogoComponent from "./components/LogoComponent.tsx"
import { BiUserCircle, BiLockAlt } from "react-icons/bi"

import './css/login.css'


function Login() {
  

  return (    
      <main className='Modal container-sm'>
        <section className="acima sectionColuna">
          <LogoComponent/> 
          <article className="FormCol">
            <div className="text-center mt-5 pt-3 me-5 user-select-none">
              <h1 className="titulo"> Tela de Acesso </h1>
              <span className="text-light subtitulo"> Gestão & Lanche</span>
              <hr className="linhaDetalhe"/>
            </div>            
            <form className="form pb-3">
              <div className="inputUser">
                <input type="text" placeholder='@Seu-Usuário' className="form-control  me-5"/>
                <BiUserCircle className="icone "/>
              </div>
              <div className="inputSenha">
                <input type="password" placeholder='Senha de Acesso' className="form-control me-5"/>
                <BiLockAlt className="icone "/>
              </div>
              <div className="flex flex-row">
                <Link to='/EsqueciSenha' className="paragrafo neutra password">Esqueci minha senha</Link>
                <button type='submit' className="btn btnBG ms-4">Acessar</button>
              </div>
            </form>            
          </article>          
        </section>      
      </main>    
  )
}

export default Login