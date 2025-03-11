import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './pages/Dashboard/Dashboard.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import { useState } from 'react';
import { MyContext } from './context/Context.jsx';

function App() {
const[isToggleSidebar,setIsToggleSidebar] = useState(false)

const value = {
  isToggleSidebar,
  setIsToggleSidebar,

}


  return (
    <BrowserRouter>
    <MyContext.Provider value={value}>

    {/* <Navbar/> */}
  <Header/>
  <div className='main d-flex'>
{/* <div className="sidebarWrapper"> */}
<div className={`sidebarWrapper ${isToggleSidebar===true ? 'toggle' : ''}`}>
  <Sidebar/>
</div>

<div className={`content ${isToggleSidebar===true ? 'toggle' : ''}`}>
<Routes>

      <Route path='/header' element={<Header/>}/>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
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
