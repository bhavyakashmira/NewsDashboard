import React from 'react'
import NavBar from '../components/NavBar';
import Home from './Home';
import { Contexts } from '../Context/Contexts'; 
import DetailPage from './Detailpage';
import Vertical from '../components/Vertical';


function Main() {
  return (
    <>
      <Contexts>
        <NavBar />
        <div style={{ display: 'flex', marginTop:'50px'}}>
          <div>
            <Vertical />
          </div>
          <div style={{marginLeft:'105px'}}>
          <Home />
         
        </div>
      </div>
      </Contexts>
    </>
  )
}

export default Main
