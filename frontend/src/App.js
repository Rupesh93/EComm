import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import './App.css';
import Dashboards from './Components/Dashboards';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Dashboards/>}/>
        <Route path='/signup' element={<Signup/>}/>
      
      </Routes>
    </Router>
     
    </div>
  );
}

export default App;
