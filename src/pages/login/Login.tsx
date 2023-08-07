import LogoComponent from "../components/LogoComponent.tsx"
import FormLogin from "../components/FormLogin.tsx"
import BackButton from "../components/BackButton.tsx"

function Login() {
  return (
    <section className="flex select-none justify-around">
      <BackButton/>
      <article className="flex justify-center transparence mt-24">
        <div> 
          <LogoComponent/>
        </div>
        <div className="text-texto-white text-center flex-col m-5">
          <h1 className="text-3xl"> Tela de Acesso </h1>
          <h3 className="text-slate-300"> Gestão & Lanche </h3>
            <hr className="mt-2"/>
          <FormLogin/>
        </div>        
      </article>
    </section>
  )
}

export default Login