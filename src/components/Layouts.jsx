import Header from './Header'
import Footer from './Footer'
import { Outlet } from "react-router-dom"
export const Layouts = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
export default Layouts;