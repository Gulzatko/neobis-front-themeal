import {useNavigate} from "react-router-dom";

export function NotFound(){

    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate(-1)
        },1000)
    

    },[])
   
    return <h1> ...NotFound</h1>
}