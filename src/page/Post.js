import { formatISO9075 } from 'date-fns'
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
    <h1>{postInfo.title}</h1>
    <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
    <div className='author'>Ditulis Oleh {postInfo.author.username}</div>
    <div className='image'>
    <img src={`http://localhost:9001/${postInfo.cover}`} alt='' />
    </div>
    <div className='content' dangerouslySetInnerHTML={{__html:postInfo.content}} />
    </div>
  )
}

export default Post