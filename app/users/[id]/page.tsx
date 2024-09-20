import React from 'react'

interface Props {
    params: { id: number }
}

const UserDetrailPage = ({params: {id}}: Props) => {
  return (
    
    <div>UserDetrailPage - {id}</div>
  )
}


export default UserDetrailPage