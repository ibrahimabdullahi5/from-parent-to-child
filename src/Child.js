import React from 'react';

 function Child({receiveMessage}) {
    const message="i love najma by coding programming"
    function handleclick(){
        receiveMessage(message)
    }
  return (
    <div>
      <button onClick={handleclick}>Send Message</button> 
     
    </div>
  )
}
export default Child;