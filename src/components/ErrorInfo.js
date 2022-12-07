import React from 'react'

export default function ErrorInfo({error}) {
  return (
    <p className='text-center container-fluid alert alert-danger'>{error}</p>
  )
}
