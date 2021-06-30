import React from 'react'

import './test.css'


import {BlogContext} from './context'

function Modal() {


  const {setModalOpenClose} = React.useContext(BlogContext) 


  


  return (
    <div className='modal'>
       <h1 onClick={setModalOpenClose} className='modal-close'>X</h1>
    </div>
  )
}

export default Modal
