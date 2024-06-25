import { Link, Outlet} from "react-router-dom";
import { Header } from "./Header";

const Layout = ()=>{
    return(
        <>
        <Header/>
        <main>
            <Link to="/"></Link>
            <Link to="/id"></Link>
           
         </main>
         <Outlet/>
        </>
        
    )
}
export {Layout}