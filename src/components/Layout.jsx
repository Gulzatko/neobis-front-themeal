import { Link, Outlet} from "react-router-dom";
import { Header } from "./Header";
import styles from "./Layout.module.scss"

const Layout = ()=>{
    return(
        <div className={styles.layout}>
        <Header/>
        <main>
            <Link to="/"></Link>
            <Link to="/id"></Link>
           
         </main>
         <Outlet/>
        </div>
        
    )
}
export {Layout}