import  styles from './App.module.scss';
import {Routes,Route} from 'react-router-dom';
import {RandomMeal} from './pages/RandomMeal';

import { Ingredient } from './pages/Ingredient';
import { Layout } from "./components/Layout";


function App() {
  return (
   <div className={styles.container}>
    
      <Routes>
         <Route path="/" element={<Layout/>}>
           <Route index  element={<RandomMeal/>}/>
           <Route path="/:id" element={<Ingredient/>}/>
          
          </Route>
          
      </Routes>
      </div>
  );
}

export default App;
