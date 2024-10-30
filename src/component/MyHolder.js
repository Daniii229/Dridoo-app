//import React, { Children } from 'react'
import MyHeader from './MyHeader'
import MyFooter from './MyFooter'
const MyHolder = ({Children}) => {
  return (
    <>
        <MyHeader />
        <div>{Children}</div>
        <MyFooter />
    </>
    
  )
}

export default MyHolder