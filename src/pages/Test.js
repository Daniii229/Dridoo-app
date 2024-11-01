import React from 'react'
import TopRightAlert from '../component/TopRightAlert'

const Test = () => {
  return (
    <div>
        <TopRightAlert message="Login Successful"/>
        
        <TopRightAlert message="Password Reset Link Sent"/>

        <TopRightAlert message="Incorrect Email & Password " backgroundColor=" brown"/>
    </div>
  )
}

export default Test