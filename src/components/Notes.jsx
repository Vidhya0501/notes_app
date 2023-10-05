import React, { useContext } from 'react'
import { NotesDataContext } from './context/NotesContext'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import NotesEditor from './NotesEditor';
import Edit from './Edit';


const Notes = () => {
    let {data,setData}=useContext(NotesDataContext)

    const navigate = useNavigate()

    let handleDelete = (index)=>{
        let newArray = [...data]//deep copy
        newArray.splice(index,1)
        setData(newArray)
    }
    
  return <>
   <div className='page-head d-flex py-5'>
            <i className="fa-regular fa-file-lines"></i> &nbsp;
            <h3>My Notes</h3>
        </div>
        <small>Recently Viewed</small>
        <div className='notes-list my-3'>
  {
    
    data.map((e,i)=>{
        return <div className='note py-3 px-3 mx-3 my-3'>
        
                    <div key={i}>
                        <div className='header'>
                            <h2>{e.title}</h2>
                            <div className='edit-delete'>
                                <Button className='edit-btn' onClick={()=>{
                            navigate(<Edit/>)
                        }}>
                                    <i className="fa-sharp fa-solid fa-pen"></i>
                                </Button>
                                &nbsp;
                                &nbsp;
                                <Button className='delete-btn' onClick={()=>handleDelete(i)}>
                                    <i className="fa-regular fa-trash-can"></i>
                                </Button>
                            </div>
                        </div>
                        <div className='note-body'>
                            <p>{e.notes}</p>
                        </div>
                        <div className='footer'>
                            <small>5 days ago</small>
                        </div>
                    </div>    
                </div>
})
 }
       </div>
  </>
          
  
}

export default Notes