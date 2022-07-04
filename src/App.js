import { BrowserRouter as Router, Route, Routes}  from 'react-router-dom';
import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './create';
import BlogDetail from './blogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App-container"> 
      <Router>
        <Navbar /> 
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/create' element={< Create />}></Route>
          <Route exact path='/blogs/:id' element={< BlogDetail />}></Route>
          <Route  path='*' element={< NotFound />}></Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
