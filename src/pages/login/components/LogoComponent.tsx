import '../css/login.css'

function LogoComponent() {
const modalDetail = './png/bgIcon.png'

return (
    <article className="fotoModal">        
            <img src={modalDetail} alt="Logo do Gestão e Lanche" width={414}/>
    </article>
  )
}

export default LogoComponent