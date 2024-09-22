import React, { useState } from 'react';
import Child from './Child';

 function Parent() {
    const [message,setMessage]=useState("")
    function receiveMessage(msg){
        setMessage(msg)
    }
  return (
    <div>
      <h1>message from the child:{message}</h1>
      <Child receiveMessage={receiveMessage} />
    </div>
  )
}
export default Parent;