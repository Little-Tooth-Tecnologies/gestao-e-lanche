import { ThemeProvider } from 'react-bootstrap'
import {Outlet} from 'react-router-dom'

function Index() {  

  return (
    <ThemeProvider 
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} 
    minBreakpoint='xxs'>
      <Outlet/>
    </ThemeProvider>
  )
}

export default Index
