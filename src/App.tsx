import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { About } from './About'
import { Home } from './Home'
import React from 'react'
import logo from './assets/logo.jpeg'
// import {fetchCSVData} from './lib'
export const App = () => {   
  const routes  =[{text:'Home',link:'/home'},{text:'About',link:'about'}]
  // fetchCSVData()
  return (
    <React.StrictMode>
   <BrowserRouter>
   <div className='flex flex-col'>
    {/* <div>1</div>
    <div>2</div>
    <div>3</div> */}
  <nav>
    <div className='flex flex-row'>
    <div className='basis-1/16'>
       <img className='w-10' src={logo} alt="Logo" />
    </div>
    <div className='basis-1/2'>
  {routes.map((link, index) =>  (
        <Link className='' key={index} to={link.link}>{link.text}</Link>
      ))} 
    </div>
   </div>
   </nav>
    <div>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </div>
 

    </div>
    </BrowserRouter>
    </React.StrictMode>
  )
}

