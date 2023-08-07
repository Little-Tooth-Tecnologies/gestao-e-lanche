import LogoComponent from "../components/LogoComponent.tsx"
import AccessButtons from "../components/AccessButtons.tsx"

function FirstAccess() {
  return (
    <section className="flex select-none justify-around">      
        <article className="flex justify-center transparence mt-28">
            <div>
                <LogoComponent/>
            </div>
            <div className="text-texto-white text-center flex-col m-5">
                <h1 className="text-3xl">Primeiro Acesso</h1>
                <h3 className="text-slate-300"> Gestão & Lanche </h3>
                <hr className="mt-2"/>
                  <AccessButtons/>
              <span className="text-slate-300 italic"> Selecione Uma das opções acima</span>
            </div>            
        </article>
    </section>
  )
}

export default FirstAccess