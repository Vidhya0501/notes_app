import React,{useState} from 'react'
import Sidebar from './components/Sidebar'
import NotesEditor from './components/NotesEditor'
import Notes from './components/Notes'
import Edit from './components/Edit'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  
  return <>
  <div className='container-fluid d-flex min-vh-100'>
    <BrowserRouter>
      <Sidebar/>
        <Routes>
            <Route path='/' element={
                <div className='main mx-3 my-3 py-5 px-5'>
                    <NotesEditor/>
                    <Notes/>  
                </div>     
            }/>
            <Route path='/edit/:id' element={<Edit/>}/>
        </Routes>
    </BrowserRouter>
  </div>
</>
   
}

export default App