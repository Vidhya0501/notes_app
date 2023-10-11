import React,{useEffect,useState,useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { NotesDataContext } from './context/NotesContext'
import { sub } from "date-fns"

const Edit = () => {
    const params = useParams()

    let {data,setData}=useContext(NotesDataContext)

    let [title,setTitle]=useState("")
    let [notes,setNotes]=useState("")

    let navigate = useNavigate()

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
          navigate("/")
        }
      },[])
    
      const handleEdit = ()=>{
        let newArray = [...data]
        newArray.splice(Number(params.id),1,{
         title,
         notes,
         date: sub(new Date(), { minutes: 0 }).toISOString()
        })
        setData(newArray)
        navigate("/")
    }
  return<>
  <div className='notes-editor p-4' style={
      {
        height: '300px',
        width:'700px'
    }}>

      <h2>Edit a Note</h2>
        <Form onSubmit={handleEdit}>
          <Form.Group>
              <Form.Control type="text" value={title} placeholder="Title" className='title' onChange={(e)=>setTitle(e.target.value)}/>
          </Form.Group>
          <br/>
          <Form.Group>
              <Form.Control as="textarea" required type="textarea" value={notes} placeholder="Take a note..." className='note-area' onChange={(e)=>setNotes(e.target.value)} />
          </Form.Group>
          <Button onClick={handleEdit}>Update</Button>
        </Form>
  </div>  
  </>
}

export default Edit