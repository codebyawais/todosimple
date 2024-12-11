'use client'
// run  on client side
import React from 'react'
import { useState } from 'react'
//it is a react hook used to manage state it 
//also allow the component to track and update user input



const page = () => {
  //state management
  //name:a piece of state that stores the text entered by user in input field intially empty string
  //setname:a function to update the value of name
  const [name, setName]=useState('')


  const [nameShow , setNameShow] = useState([])

 
  return (
    <div>
        <div className='bg-black h-[100vh]  flex items-center justify-center'>
            <div className='bg-red-900 min-h-[50vh] w-[50%] '>



              <h1 className='text-white'>Todo List</h1>


              <input type='text' placeholder='Enter the name'
               className='h-[40px] mt-6' 
                onChange={(e)=>{setName(e.target.value)}}
                />
              
              <button className='bg-black h-[45px] ml-4 text-white'
              
               onClick={()=>{setNameShow([...nameShow , name])}} >
              Click me </button>
            
          {/* <p>{name}</p> */}
          {nameShow.map(item=>{ return (<h1 key={item}>{item}</h1>)})}

            </div>
        </div>
    </div>
  )
}

export default page