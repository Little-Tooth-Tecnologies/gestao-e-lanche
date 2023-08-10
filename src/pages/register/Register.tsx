import BackButton from "../components/BackButton.tsx"
import FormRegister from "../components/FormRegister.tsx"
import LogoComponent from "../components/LogoComponent.tsx"


function Register() {
  return (
    <section className="flex select-none justify-around">
        <BackButton/>
      <article className="flex justify-center transparence mt-28">
        <div>
          <LogoComponent/>
        </div>        
        <div className="text-texto-white text-center flex-fol m-5">
          <h1 className="text-3xl font-title"> Tela de Cadastro </h1>
          <h3 className="text-slate-300 font-body"> Gestão & Lanche </h3>
            <hr className="mt-2"/>
            <FormRegister/>            
        </div>
      </article>
    </section>
  )
}

export default Register