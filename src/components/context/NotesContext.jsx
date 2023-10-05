import React,{useState} from 'react'

export const NotesDataContext=React.createContext()

function NotesContext({children}) {
  let [data,setData]=useState([])
  return <NotesDataContext.Provider value={{data,setData}}>
      {children}
  </NotesDataContext.Provider>
}

export default NotesContext
