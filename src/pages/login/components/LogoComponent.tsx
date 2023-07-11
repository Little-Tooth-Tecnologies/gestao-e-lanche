import '../css/login.css'

function LogoComponent() {
const modalDetail = './png/bgIcon.png'

return (
    <aside className="fotoModal user-select-none">        
            <img src={modalDetail} alt="Logo do Gestão e Lanche" width={414}/>
    </aside>
  )
}

export default LogoComponent