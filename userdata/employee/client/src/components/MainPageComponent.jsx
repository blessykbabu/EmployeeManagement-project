import  React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import LinkComponent from './LinkComponent';
import RegFormComponent from './RegFormComponent';
import EmployeeComponent from './EmployeeComponent';
import EmployeeProfileComponent from './EmployeeProfileComponent';
import UpdateComponent from './updateComponent';

import AdminLogin from './AdminLogin';


export default function  MainPageComponent(){
return(
   <>
<Router>
 <Routes>
             <Route path='/' element={<LinkComponent/>}/>
             <Route exact path='/login' element={<AdminLogin/>}/>
            <Route exact path='/registration' element={<RegFormComponent/>}/>
            <Route path='/view' element={<EmployeeProfileComponent/>}/>
            <Route path='/profile/:id' element={<UpdateComponent/>}/>
            {/* <Route path='/edit/:id' element={<EditComponent/>}/> */}
        </Routes>
        </Router>
      <div className='home'>

      </div>
   </>
)
}
