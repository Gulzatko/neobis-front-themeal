import './App.css';
import {Routes,Route} from 'react-router-dom';
import {Header} from './components/Header';
import {Mainpage} from './components/Mainpage';
import {RandomMeal} from './pages/RandomMeal';
import {Findmeal } from './pages/Findmeal';
import { Ingredient } from './pages/Ingredient';
import{Youtube} from './pages/Youtube';


function App() {
  return (
   <>
     <Header/>
     <Routes>
           <Route path="/"  element={<RandomMeal/>}/>
           <Route path="/:idMeal" element={<Ingredient/>}/>
           <Route path="/:idMeal/youtube" element={<Youtube/>}/>
           
       </Routes>
       <Routes>
       <Route path="/" element={<Findmeal/>}/>
       <Route path="/:findmeal" element={<Findmeal/>}/>
       </Routes>
     
     </>
  );
}

export default App;
