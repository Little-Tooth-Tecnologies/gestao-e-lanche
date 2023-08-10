import SideMenu from "./components/sideMenu/SideMenu.tsx"
import NavMenu from './components/navMenu/NavMenu.tsx'
import { Outlet } from "react-router-dom"

function Dashboard() {
    return (
        <section className="transparenceNoBorder m-8">            
            <article className="fle flex-col">
                <div className="flex flex-row">
                    <SideMenu/>
                    <div className="w-full">
                        <NavMenu/>
                        <Outlet/>
                    </div>
                </div>
            </article>            
        </section>
    )
}

export default Dashboard