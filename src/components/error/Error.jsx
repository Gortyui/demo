import React from 'react'
import c from './error.module.css'
function Error() {
  return (
    <div className={`navigacia ${c.error}`}><div>Error 404 <br />
    page not found,<br />check url</div></div>
  )
}

export default Error