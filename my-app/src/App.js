
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Detail from './Components/Detail';
import Home from './Components/Home';
import Login from './Components/Login';
import Error from './Components/Error';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={< Home/>} />
        <Route path='/feature' element={<feature/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/details' element={<Detail/>}/>
        <Route path='/*' element={<Error/>}/> 
       
      </Routes>
      </BrowserRouter>
    
     
       
    </div>
  );
}

export default App;

// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Login from './components/Login';
// import Details from './components/Details';
// import Errror from './components/Errror';
// import {Routes,Route, BrowserRouter} from "react-router-dom"

// function App() {
//   return (
//   <>
//   <BrowserRouter>
//     <Navbar />
//     <Routes>
//       <Route path='/' element={<Home />} />
//       <Route path='/login' element={<Login />} />
//       <Route path='/details' element={<Details />} />
//       <Route path='*' element={<Errror />} />
//     </Routes>
//     </BrowserRouter>
//   </>
//   );
// }

// export default App;
