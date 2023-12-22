import React from 'react'
import { useParams } from 'react-router-dom'
const SinglePost = () => {

    const{cate,id} = useParams()
    console.log(cate,id)

  return (
    <div>SinglePost</div>
  )
}

export default SinglePost