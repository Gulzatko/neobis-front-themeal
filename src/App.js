// import logo from './logo.svg';
import {Header} from './components/Header/Header'
import './App.css';
import { TheMealOftheDay } from './components/TheMealOftheDay';
import { Findmeal } from './components/Findmeal';

function App() {
  return (
     <div>
        <Header/>
        <TheMealOftheDay/>
         <Findmeal/>
     </div>
  );
}

export default App;
