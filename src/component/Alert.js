import React from 'react'

function Alert(props) {

  return (
    <div style={{ height: '40px' }} className="mb-5">
      {props.alert && <div className='container-fluid'>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{props.alert.msg}</strong>
        </div>
      </div>}
    </div>
  )
}

export default Alert