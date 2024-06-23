import React from 'react'
import { useParams } from 'react-router-dom'

function Restaurants() {
    const {id} = useParams()
  return (
    <div>Restaurants Id : {id}</div>
  )
}

export default Restaurants