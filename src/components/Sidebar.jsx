import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='sidebar bg-light'>
            <div className='mx-4 mt-5'>
                
                <span className='brand-name fs-3 fw-bold py-5' >Notes App</span>
            </div>
            <div className='item my-5 mx-3 py-2'>
                  <div className='item text-light px-3'>
                    <Link style={{textDecoration: 'none'}} to='/'>
                    <i className="fa-regular fa-file-lines" style={
                        {color: 'white'
                    }}></i> 
                     &nbsp;
                    <span>Notes</span>
                    </Link>
                  </div>
            </div>
        </div>
    )
}

export default Sidebar