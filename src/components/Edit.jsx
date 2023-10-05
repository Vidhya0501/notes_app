import React,{useEffect,useState,useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { NotesDataContext } from './context/NotesContext'

const Edit = () => {
    const params = useParams()
    let [title,setTitle]=useState("")
    let [notes,setNotes]=useState("")

    let navigate = useNavigate()

    let {data,setData}=useContext(NotesDataContext)
  
    const getData = (index)=>{
        setTitle(data[index].title)
        setNotes(data[index].notes)
      
      }
    
    
      useEffect(()=>{
        if(Number(params.id)<data.length)
        {
            getData(Number(params.id))
        }
        else
        {
          navigate(<Notes/>)
        }
      },[])
    
      const handleEdit = ()=>{
        let newArray = [...data]
        newArray.splice(Number(params.id),1,{
         title,
         notes
        })
        setData(newArray)
        navigate(<Notes/>)
    }
  return<>
  <div className='notes-editor p-4' style={
      {
        height: '300px',
        width:'700px'
    }}>

      <h2>Add a Note</h2>
        <Form>
          <Form.Group>
              <Form.Control type="text" value={title} placeholder="Title" className='title' onChange={(e)=>setTitle(e.target.value)}/>
          </Form.Group>
          <br/>
          <Form.Group>
              <Form.Control as="textarea" required type="textarea" value={notes} placeholder="Take a note..." className='note-area' onChange={(e)=>setNotes(e.target.value)} />
          </Form.Group>
          <Button type="submit"  onClick={handleEdit}>Submit</Button>
        </Form>
       
        
  </div>
  
  </>
}

export default Edit