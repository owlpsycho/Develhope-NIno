import Navbar from "./Navbar"
import { useContextTheme } from "./Contex/useContextTheme"
import { useContext } from "react"

 
 function Layout({children,handleTheme}) {

     const themes = useContext(useContextTheme)
     console.log(themes);
    return (
        <div className="container-app" style={{backgroundColor:themes.theme == "light" ? "white" :"black"}}>

            <Navbar handleTheme={handleTheme}  />
            {children}
            
        </div>
    )
 }

 export default Layout