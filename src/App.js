import { BrowserRouter as Router, Route, Routes, Switch}  from 'react-router-dom';
import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './create';
function App() {
  return (
    <div className="App-container"> 
      <Router>
        <Navbar /> 
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/create' element={< Create />}></Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
