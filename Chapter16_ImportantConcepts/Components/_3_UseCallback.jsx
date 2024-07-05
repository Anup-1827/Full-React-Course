import React, {memo, useCallback, useState } from 'react'

function UseCallback({productId}) {
    const [isDark, setIsDark] = useState(false)

    const handleSubmit = useCallback(()=>{
        // Async Synchronous Logic
    },[productId])
  return (
    <div>
        <div>
            <input id="checkboxid" type='checkbox'
                onClick={()=>setIsDark(prev=> !prev)}
            />
            <label htmlFor='checkboxid'>Drak</label>
        </div>
        <div
            style={{
                color: isDark?"white":"black",
                background: !isDark?"white":"black"
            }}
        >

        <ShippingForm handleSubmit={handleSubmit}/>
        </div>
    </div>
  )
}

const  ShippingForm = memo(function ({handleSubmit}){

    console.log("Rendering Form");
    const [count, setCount] = useState(0)

    let time = new Date()
    while(new Date() - time <1000){

    }

    return(
        <div>
            <div><button onClick={()=>setCount(prev=> prev+1)}>Counter:-- {count}</button></div>

            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Address'/>
                    <br />
                    <input type="number" placeholder='Mobile Number'/>
                    <br />
                    <button type='submit'>Submit Form</button>
                </form>
            </div>
        </div>
    )
})

export default UseCallback