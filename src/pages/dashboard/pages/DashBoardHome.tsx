import { Card, CardContent } from '@mui/material'
import { useState } from 'react'
import MenuAccess from '../components/MenuAccess/MenuAccess.tsx'
import { BiDoughnutChart } from 'react-icons/bi'
import {Chart} from "react-google-charts"



function DashBoardHome() {
  
  const [cards] = useState([
    { id: 'Vendas', content: "500"},
    { id: 'Clientes', content: "100"},
    { id: 'Entregas', content: "700"},    
    { id: 'Pedidos', content: "900"},    
  ])



  return (
    <section className="bg-slate-100 flex flex-col p-5">
      <header className="bg-slate-100">
        <span> Acesso Rápido </span>
          <MenuAccess/>
      </header>
        <hr/>
      <article className='flex flex-row gap-5'>
        {cards.map ((card) => (
        <Card key={card.id}>
          <CardContent>
            <div className='flex flex-row gap-2'>
              <BiDoughnutChart className='mt-1'/>
              <span> {card.id} </span>
            </div>
            <Chart
              chartType="Bar"
              width="100%"
              height="400px"
              data={card.content}              
            />            
          </CardContent>
        </Card>
        ))}        
      </article>
    </section>
  )
}

export default DashBoardHome