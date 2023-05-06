import React, { useState } from 'react'

function Data() {
    const [ctr,setNum]=useState(0)
    function incr()
    {
        setNum(ctr+1)
    }
    function reduce()
    {
        setNum(ctr-1)
    }
    function resetCtr()
    {
        setNum(0)
    }
  return (
    <div class="App mt-5 container w-50 text-center p-5 rounded-5 border border-dark"><h1>Counter</h1>
        <div class="display container bg-dark text-center rounded-pill">
            <h1 class="text-white">{ctr}</h1>
        </div>
        <div class="row">
        <button class="mt-5 btn btn-success col-md-4" onClick={incr}><i class="fa-solid fa-arrow-up"></i> Increment</button>
        <button class="mt-5 btn btn-warning  col-md-4" onClick={reduce}><i class="fa-solid fa-arrow-down"></i> Decrement</button>
        <button class="mt-5 btn btn-info  col-md-4" onClick={resetCtr}><i class="fa-solid fa-arrows-rotate"></i> Reset</button>
        </div>
        
    </div>
 
  )
}

export default Data