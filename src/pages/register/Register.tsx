import { BiLock} from "react-icons/bi"
import { MdPeople } from "react-icons/md"
import { HiOutlineMail } from "react-icons/hi"
import LogoComponent from "../login/components/LogoComponent"
import { Link } from "react-router-dom"
import { Accordion, Modal } from "react-bootstrap"
import { useState } from "react"

function Register() {

  const [openTerms, setOpenTerms] = useState(false)
  const [openPrivacy, setOpenPrivacy] = useState(false)

  return (
<section className='ModalI'>
        
        <article className="LoginSection">
          <LogoComponent/>           
          <article className="container">
            <div className="user-select-none text-center titleDiv">
              <h1 className="titulo text-light"> Tela de Cadastro </h1>
              <span className="text-light subtitulo"> Gestão & Lanche</span> <br/>
              <span className="text-light subtitulo"> (Aqui você digita seus Dados para acessar o sistema) </span>
              <hr className="linhaDetalhe"/>
            </div>            
            <form className="form">

              <article className="inputArticle">
              <div className="inputsDivs input">
                <label htmlFor="email"><HiOutlineMail className="iconV"/></label>
                <input type="email" className="form-control" placeholder="Email" name="email" id="email" required/> 
              </div>
              <div className="inputsDivs input">
                <label htmlFor="senha"><BiLock className="iconV"/></label>
                <input type="password" className="form-control" placeholder="Senha" name="password" id="password" required/>
              </div>              
              </article>

              <article className="inputArticle">
              <div className="inputsDivs input">
                <label htmlFor="name"><MdPeople className="iconV"/></label>
                <input type="text" className="form-control" placeholder="Nome" name="name" id="name" required/>
              </div>

              <div className="inputsDivs input">
                <label htmlFor="surname"><MdPeople className="iconV"/></label>
                <input type="text" className="form-control" placeholder="Sobrenome" name="surname" id="surname" required/>                
              </div>
              </article>

              <article className="inputArticle">
              
                            

              </article>

              
              <div className="inputCenter">
                
                <label className="text-light"> Eu que li e aceito os 
                {ModalTerms()};
                <br/> Concordo com a {ModalPrivacy()} = </label>
                <input type="checkbox" className="btn btn-outline-light ms-2 mt-4" required/>
              </div>
              

                <div className="RowIconsV">
                  <button type='reset' className="btn btnBG p-2">Limpar</button>
                  <button type='submit' className="btn btnBG p-2">Cadastrar</button>              
                </div>

              <div className="text-center">
                <Link to='/Login' className="text-light"> Já tenho uma Conta </Link>
              </div>
            </form>
          </article>          
        </article>      
      </section> 
  )



    function ModalTerms(){
      return(
        <>
        <span className="modalLink" onClick={() => setOpenTerms(true)}>
          Termos de Uso
        </span>

        <Modal show={openTerms} onHide={() => setOpenTerms(false)} centered className="pb-5">
          <Modal.Header closeButton>
            <Modal.Title>Termos de Uso</Modal.Title>
          </Modal.Header>
          <Modal.Body className="user-select-none">
            <p className="text-secondary">Bem-vindo(a) aos Termos de Uso da aplicação "Gestão e Lanche". 
            Ao acessar e utilizar nossa plataforma, você concorda com as condições aqui descritas. 
            Caso não concorde com algum destes termos, solicitamos que não continue a utilizar o sistema.</p>
            {TermsOfUse()}      
            <p className="text-secondary">Ao utilizar a aplicação "Gestão e Lanche", você concorda com estes termos e condições. Se não concordar, por favor, não continue utilizando o serviço. Para mais informações, entre em contato conosco. Agradecemos por escolher a nossa aplicação!</p>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btnBG" onClick={() => setOpenTerms(false)}>Fechar</button>
          </Modal.Footer>
        </Modal>
        </>
      )

      function TermsOfUse() {
        return <Accordion className="pt-2 pb-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>1.Autenticação e Autorização</Accordion.Header>
            <Accordion.Body>
              <p>1.1 A aplicação "Gestão e Lanche" fornecerá um sistema de autenticação seguro para proteger os dados dos usuários.
                O acesso às funcionalidades restritas do sistema será permitido somente para usuários autorizados,
                que serão identificados por meio de um mecanismo de geração de tokens.</p>
              <p>
                1.2 O usuário é responsável por manter suas credenciais de login em sigilo,
                não compartilhando-as com terceiros.
                Qualquer atividade realizada por meio de suas credenciais será de sua inteira responsabilidade.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>2. Gerenciamento de Estoque</Accordion.Header>
            <Accordion.Body>
              <p>
                2.1 A aplicação permitirá o cadastro e gerenciamento de ingredientes,
                produtos e outros itens relacionados ao estoque do negócio.
                Os usuários terão a capacidade de adicionar, remover e atualizar informações sobre os itens de estoque,
                como nome, quantidade, fornecedor, preço de compra, data de validade, entre outros.
              </p>

              <p>
                2.1 A aplicação permitirá o cadastro e gerenciamento de ingredientes, produtos e outros itens relacionados ao estoque do negócio. Os usuários terão a capacidade de adicionar, remover e atualizar informações sobre os itens de estoque, como nome, quantidade, fornecedor, preço de compra, data de validade, entre outros.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>3. Pedidos e Entregas</Accordion.Header>
            <Accordion.Body>
              <p>
                3.1 Os usuários poderão registrar pedidos de clientes, fornecendo informações detalhadas sobre os itens solicitados e os dados do cliente.
              </p>
              <p>
                3.2 A aplicação "Gestão e Lanche" manterá um registro de todos os pedidos recebidos, permitindo que os usuários acompanhem o status dos pedidos e gerenciem as entregas.
              </p>
              <p>
                3.3 O usuário é responsável por garantir que as informações de pedidos e entregas sejam precisas e atualizadas. A aplicação não se responsabiliza por quaisquer problemas decorrentes de informações incorretas ou desatualizadas.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>4. Gerenciamento de Clientes</Accordion.Header>
            <Accordion.Body>
              <p>
                4.1 A aplicação permitirá o cadastro e gerenciamento de informações sobre os clientes do negócio. Os usuários poderão registrar dados como nome, endereço, número de telefone e histórico de pedidos.
              </p>
              <p>
                4.2 O usuário concorda em utilizar as informações de clientes exclusivamente para fins relacionados ao negócio. O compartilhamento de dados de clientes com terceiros não autorizados é estritamente proibido.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>5. Relatórios e Análises</Accordion.Header>
            <Accordion.Body>
              <p>
                5.1 A aplicação "Gestão e Lanche" fornecerá recursos para a geração de relatórios e análises sobre as operações do negócio, como vendas, desempenho do estoque e produtos mais populares.
              </p>
              <p>
                5.2 Os relatórios e análises gerados pelo sistema têm o propósito de auxiliar o usuário nas decisões estratégicas e no acompanhamento do desempenho geral do negócio.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>6. Integração com Pagamentos</Accordion.Header>
            <Accordion.Body>
              <p>
                6.1 A aplicação poderá ser integrada a serviços de pagamento online, facilitando o processo de pagamento para os clientes.
              </p>
              <p>
                6.2 O usuário concorda em utilizar a integração com pagamentos de forma ética e legal. Quaisquer atividades fraudulentas ou ilegais serão investigadas e relatadas às autoridades competentes.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>7. Configurações e Personalização</Accordion.Header>
            <Accordion.Body>
              <p>
                7.1 A aplicação permitirá que o usuário personalize algumas configurações do sistema de acordo com as necessidades do negócio, como informações de contato, horários de funcionamento e opções de entrega.
              </p>
              <p>
                7.2 O usuário é responsável por garantir que as configurações personalizadas estejam corretas e atualizadas. A aplicação não se responsabiliza por quaisquer consequências decorrentes de informações incorretas nas configurações.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="7">
            <Accordion.Header>8. Modificações nos Termos de Uso</Accordion.Header>
            <Accordion.Body>
              <p>
                8.1 A equipe responsável pela aplicação "Gestão e Lanche" reserva-se o direito de modificar estes Termos de Uso a qualquer momento, a fim de melhorar o serviço ou atender a requisitos legais.
              </p>
              <p>
                8.1 A equipe responsável pela aplicação "Gestão e Lanche" reserva-se o direito de modificar estes Termos de Uso a qualquer momento, a fim de melhorar o serviço ou atender a requisitos legais.
              </p>
            </Accordion.Body>

            <Accordion.Item eventKey="8">
              <Accordion.Header>9. Encerramento da Conta</Accordion.Header>
              <Accordion.Body>
                <p>
                  9.1 O usuário pode encerrar sua conta na aplicação "Gestão e Lanche" a qualquer momento, caso deseje deixar de utilizar o serviço.
                </p>
                <p>
                  9.2 O encerramento da conta resultará na exclusão permanente de todas as informações e dados relacionados ao usuário.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="9">
              <Accordion.Header>10. Contato</Accordion.Header>
              <Accordion.Body>
                <p>
                  10.1 Para entrar em contato conosco em caso de dúvidas, sugestões ou questões relacionadas aos Termos de Uso, utilize os meios de contato disponibilizados na aplicação.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion.Item>
        </Accordion>
      }

    }

    function ModalPrivacy(){
      return(
        <>
        <span className="modalLink" onClick={() => setOpenPrivacy(true)}>
          Politica de Privacidade
        </span>        

        <Modal show={openPrivacy} onHide={() => setOpenPrivacy(false)} centered className="pb-5">
          <Modal.Header closeButton>
            <Modal.Title>Politica de Privacidade</Modal.Title>         
          </Modal.Header>
          <Modal.Body className="user-select-none">
            <p className="text-secondary">Esta Política de Privacidade descreve como a aplicação "Gestão e Lanche" coleta, utiliza, compartilha e protege as informações pessoais dos usuários.              
            </p>
            <p className="text-secondary">
              Ao utilizar nossa aplicação, você concorda com as práticas aqui descritas. Esta política se aplica exclusivamente à aplicação "Gestão e Lanche" e não abrange serviços ou aplicativos de terceiros.
            </p>
            {privacyTerms()}
            <p className="text-secondary"> Obrigado por utilizar a aplicação "Gestão e Lanche". Garantimos a proteção e segurança das suas informações pessoais e valorizamos sua privacidade. Para mais detalhes, entre em contato conosco.</p>
          </Modal.Body>     
          <Modal.Footer>
            <button className="btn btnBG" onClick={() => setOpenPrivacy(false)}>Fechar</button>
          </Modal.Footer>     
        </Modal>
        </>
      )

      function privacyTerms() {
        return <Accordion className="pt-2 pb-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>1. Coleta de Informações</Accordion.Header>
            <Accordion.Body>
              <p> - Para utilizar a aplicação "Gestão e Lanche", coletamos informações de cadastro, como nome, endereço, telefone e e-mail, e dados de pedidos, incluindo detalhes dos itens solicitados e informações do cliente.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>2. Uso das Informações</Accordion.Header>
            <Accordion.Body>
              <p>
                - As informações coletadas são utilizadas para operar o serviço da aplicação e melhorar a experiência do usuário. Podemos enviar comunicações relacionadas a pedidos e ofertas promocionais, se autorizado pelo usuário.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>3. Compartilhamento de Informações</Accordion.Header>
            <Accordion.Body>
              <p>
                - Não compartilhamos informações pessoais com terceiros, exceto quando necessário para fornecer os serviços da aplicação ou por exigência legal. As informações agregadas e anônimas podem ser compartilhadas para análises.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      }
    }


}

export default Register