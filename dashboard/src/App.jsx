import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import AdminNavbar from './components/Navbar/AdminNavbar';
// import Navbar from './components/Navbar/Navbar.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';

function App() {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
  <Header/>
  <div className='main dflex'>
<div className="sidebarWrapper">
  <Sidebar/>
</div>

<div className="content">
<Routes>
      {/* <Route path='/' element={</>}/> */}
      <Route path='/header' element={<Header/>}/>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
</div>
  </div>
   
    </BrowserRouter>
  )
}

export default App
