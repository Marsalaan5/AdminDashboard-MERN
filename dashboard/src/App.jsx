import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './pages/Dashboard/Dashboard.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import { useState,useEffect } from 'react';
import { MyContext } from './context/Context.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';

function App() {
const[isToggleSidebar,setIsToggleSidebar] = useState(false)
const[isLogin,setIsLogin] = useState(false)
const[isHideSidebarAndHeader,setIsHideSidebarAndHeader] = useState(false)
const[themeMode,setThemeMode] = useState(true)



const value = {
  isToggleSidebar,
  setIsToggleSidebar,
  isLogin,
  setIsLogin,
isHideSidebarAndHeader,
setIsHideSidebarAndHeader,
themeMode,
setThemeMode,
}

useEffect(() => {
  if(themeMode===true){
    document.body.classList.remove('dark')
    document.body.classList.add('light')
    localStorage.setItem('themeMode',themeMode)
  }
else{
  document.body.classList.remove('light')
  document.body.classList.add('dark')
  localStorage.setItem('themeMode',themeMode)
}
}, [themeMode])



  return (
    <BrowserRouter>
    <MyContext.Provider value={value}>

    {/* <Navbar/> */}
{
  isHideSidebarAndHeader !==true && <Header/>
}
  <div className='main d-flex'>
{/* <div className="sidebarWrapper"> */}

{
  isHideSidebarAndHeader !==true && <div className={`sidebarWrapper ${isToggleSidebar===true ? 'toggle' : ''}`}>
  <Sidebar/>
</div>
}


<div className={`content ${isToggleSidebar===true ? 'toggle' : ''}`}>
<Routes>

      <Route path='/header' element={<Header/>}/>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
</div>
  </div>
   
    </MyContext.Provider>
    </BrowserRouter>
  )
}

export default App


// import './App.css'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Dashboard from './pages/Dashboard/Dashboard.jsx';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header/Header.jsx';
// import Sidebar from './components/Sidebar/Sidebar.jsx';
// import { MyContextProvider,MyContext } from './context/Context.jsx';
// import { useContext } from 'react';

// function App() {

//   const { isToggleSidebar } = useContext(MyContext);

//   return (
//     <BrowserRouter>
//       <MyContextProvider>
//         <Header />
//         <div className="main d-flex">
//           <div className={`sidebarWrapper ${isToggleSidebar ? 'toggle' : ''}`}>
//             <Sidebar />
//           </div>

//           <div className="content">
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/dashboard" element={<Dashboard />} />
//             </Routes>
//           </div>
//         </div>
//       </MyContextProvider>
//     </BrowserRouter>
//   );
// }

// export default App;



// import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Dashboard from './pages/Dashboard/Dashboard.jsx';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header/Header.jsx';
// import Sidebar from './components/Sidebar/Sidebar.jsx';
// import { MyContextProvider, MyContext } from './context/Context.jsx';
// import { useContext } from 'react';

// function App() {
//   return (
//     // Wrap everything in the context provider
//     <MyContextProvider>
//       <BrowserRouter>
//         <Header />
//         <div className="main d-flex">
//           <SidebarWithContext />
//           <div className="content">
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/dashboard" element={<Dashboard />} />
//             </Routes>
//           </div>
//         </div>
//       </BrowserRouter>
//     </MyContextProvider>
//   );
// }

// function SidebarWithContext() {
//   // Use the context within the SidebarWithContext component
//   const { isToggleSidebar } = useContext(MyContext);

//   return (
//     <div className={`sidebarWrapper ${isToggleSidebar ? 'toggle' : ''}`}>
//       <Sidebar />
//     </div>
//   );
// }

// export default App;
