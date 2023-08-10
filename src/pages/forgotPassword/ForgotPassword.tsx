import BackButton from "../components/BackButton.tsx"
import LogoComponent from "../components/LogoComponent.tsx"
import FormForgotPassword from "../components/FormForgotPassword.tsx"

function ForgotPassword() {
  return (
    <section className="flex select-none justify-around">
        <BackButton/>
      <article className="flex justify-center transparence mt-28">
        <div>
          <LogoComponent/>
        </div>
        <div className="text-texto-white text-center flex-fol m-5">
          <h1 className="text-3xl font-title">Recuperação de Senha </h1>
          <h3 className="text-slate-300 font-body"> Gestão & Lanche </h3>
            <hr className="mt-2"/>
            <FormForgotPassword/>
        </div>

      </article>
    </section>
  )
}

export default ForgotPassword