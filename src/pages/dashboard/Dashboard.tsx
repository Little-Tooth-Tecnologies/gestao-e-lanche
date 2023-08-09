import SideMenu from "./components/sideMenu/SideMenu.tsx"
import NavMenu from './components/navMenu/NavMenu.tsx'
import { Outlet } from "react-router-dom"

function Dashboard() {
    return (
        <section className="transparenceNoBorder m-10">            
            <article className="flex flex-col">
                <div className="flex flex-row">
                    <SideMenu/>
                    <NavMenu/>                
                </div>                
                    <Outlet/>
            </article>            
        </section>
    )
}

export default Dashboard