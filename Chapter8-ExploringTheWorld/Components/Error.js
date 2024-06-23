import React from 'react'
import {useRouteError} from "react-router-dom"

function Error() {

    const {status, statusText} = useRouteError()
  return (
    <div>
        <h2>OPPs!!!!</h2>
        <b>{status + " " + statusText}</b>
    </div>
  )
}

export default Error