import React from 'react'
import { FaFilter, FaRecycle } from 'react-icons/fa'
import Input from './Input'
import '../component/JobsHead.css' 

const JobsHead = (props) => {
  return (
    <div className='Jobheader'>
        <h2>{props.title}</h2>
        <div className='Jobheadmenu'>
           
           <h3><FaFilter/>Filter By</h3>
           <div className='filters'>
           <Input placeholder="25/09/23"/>
           <Input placeholder="Job Id"/>
           <Input placeholder="Number Plate"/>
            <button className='filterbtn' ><FaRecycle/></button>
            </div>
        </div>

    </div>
  )
}

export default JobsHead