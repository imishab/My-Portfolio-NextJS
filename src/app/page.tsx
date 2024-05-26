'use client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from './pages/index';
import Ui from './pages/ui';
import Achievements from './pages/achievements';

import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';



export default function Home() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Navbar />
              <Index />
            </>
          }
        />
        <Route
          path='/ui'
          element={
            <>
              <Navbar2 currentPage="ui" />
              <Ui />
            </>
          }
        />
        <Route
          path='/achievements'
          element={
            <>
              <Navbar2 currentPage="achievements" />
              <Achievements />
            </>
          }
        />

        {/* <Route path='/about' element={<About />} />
        <Route path='/signin' element={<Signin />} /> */}
      </Routes>
    </BrowserRouter>
   </>

  );
}
