import './App.css';
import {Routes,Route} from 'react-router-dom';
import {Header} from './components/Header';

import {RandomMeal} from './pages/RandomMeal';
import {Findmeal } from './pages/Findmeal';
import { Ingredient } from './pages/Ingredient';
import { Layout } from "./components/Layout";


function App() {
  return (
   <>
    
      <Routes>
         <Route path="/" element={<Layout/>}>
           <Route index  element={<RandomMeal/>}/>
           <Route path="/:id" element={<Ingredient/>}/>
          
          </Route>
          
      </Routes>
      </>
  );
}

export default App;
