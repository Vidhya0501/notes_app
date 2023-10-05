import React, { useState, useContext,useRef} from 'react'
import {Form,Button} from 'react-bootstrap'
import { NotesDataContext } from './context/NotesContext'




const NotesEditor = () => {
  let [title,setTitle]=useState("")
  let [notes,setNotes]=useState("")
  let {data,setData}=useContext(NotesDataContext)

  const ftitle=useRef("");
  const fnotes=useRef("");

  
  return <>
 
  <div className='notes-editor p-4' style={
      {
        height: '300px',
        width:'700px'
    }}>

      <h2>Add a Note</h2>
        <Form onSubmit={(e)=>{
            e.preventDefault()
            let newArray=[...data]
            newArray.push({title,notes})
            setData(newArray)

            ftitle.current.value=""
            fnotes.current.value=""

           
        }}
        
       
        
        >
          <Form.Group>
              <Form.Control type="text" ref={ftitle} placeholder="Title" className='title' onChange={(e)=>setTitle(e.target.value)}/>
          </Form.Group>
          <br/>
          <Form.Group>
              <Form.Control as="textarea" required type="textarea" ref={fnotes} placeholder="Take a note..." className='note-area' onChange={(e)=>setNotes(e.target.value)} />
          </Form.Group>
          <Button type="submit">Save</Button>
        </Form>      
  </div>

  </>
}

export default NotesEditor