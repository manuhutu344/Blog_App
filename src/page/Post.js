import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Post() {
    const [postInfo, setPostInfo] = useState(null)
    const {id} = useParams()
    useEffect(()=>{
        fetch(`http://localhost:9001/post/post/${id}`).then(response=>{
            response.json().then(postInfo =>{
                setPostInfo(postInfo)
            })
        })
    }, [])
    if(!postInfo) return ''
  return (
    <div className='post-page'>
    <div className='image'>
    <img src={`http://localhost:9001/${postInfo.cover}`} alt='' />
    </div>
    <h1>{postInfo.title}</h1>
    <div dangerouslySetInnerHTML={{__html:postInfo.content}} />
    </div>
  )
}

export default Post