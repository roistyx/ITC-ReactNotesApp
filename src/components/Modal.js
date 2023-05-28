import React from 'react'

export default function Modal({open,children, onClose}) {
    if(!open) return null
    // console.log(open)

  return ( <>
        <div className="overlay"></div>
        <div className="modal">
            <button onClick={onClose}>X</button>
            {children}
        </div>
    </>
      
    
  )
}
