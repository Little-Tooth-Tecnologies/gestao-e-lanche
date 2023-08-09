import { Link } from "react-router-dom"
import { BiLogIn, BiUserPlus } from "react-icons/bi"

function AccessButtons() {
  return (
    <div className="flex flex-col gap-5 mt-10 mb-7">
        <Link to='/login' className="bg-botão-idle hover:bg-botão-hover text-slate-500 hover:text-texto-dark font-paragraph py-2 px-4 rounded">
                <span className="font-body">Login</span>
                <BiLogIn className="inline-block text-2xl ml-1"/>
        </Link>
        <Link to='/Cadastro' className="outline-botão-idle border border-botão-idle text-slate-200 hover:text-texto-dark hover:bg-botão-hover font-paragraph py-2 px-4 rounded">
            <span className="font-body">Cadastro</span>
            <BiUserPlus className="inline-block text-2xl ml-1"/>
        </Link>
    </div>
  )
}

export default AccessButtons