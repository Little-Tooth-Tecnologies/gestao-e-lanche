import { HiOutlineMail } from "react-icons/hi"
import LogoComponent from "../login/components/LogoComponent"
import { BiUserCircle } from "react-icons/bi"

function EsqueciSenha() {
  return (
    <section className="ModalI">
      <article className="LoginSection">
        <LogoComponent />

        <article className="container">
          <div className="user-select-none text-center titleDiv">
            <h1 className="titulo text-light"> Redefinição de Senha </h1>
            <span className="text-light subtitulo"> Gestão & Lanche</span> <br/>
            <span className="text-light subtitulo"> Digite Seu Email ou Seu Usuário </span>
            <hr className="linhaDetalhe" />
          </div>

          <form className="form">
            <article className="inputArticle">
              <div className="inputsDivs input">
                <label htmlFor="email"><HiOutlineMail className="iconV" /></label>
                <input type="email" className="form-control" placeholder="Email" name="email" id="email" required />
              </div>                            
              <div className="inputsDivs input">
                <label htmlFor="user"><BiUserCircle className="iconV" /></label>
                <input type="text" className="form-control" placeholder="Nome de Usuário" name="user" id="user" required />
              </div>
            </article>
          </form>

          </article>
          </article>          
    </section>
  )
}

export default EsqueciSenha