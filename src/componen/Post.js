import { formatISO9075 } from 'date-fns'
import React from 'react'
import { Link } from 'react-router-dom'

function Post({title, summary, cover, content, createdAt, author, _id}) {
  return (
    <div className='post'>
    <div className='image'>
    <Link to={`/post/post/${_id}`}>
    <img src={'http://localhost:9001/'+cover} alt='' />
    </Link>
    </div>
    <div className='texts'>
    <Link to={`/post/post/${_id}`}>
    <h2>{title}</h2>
    </Link>
    <p className='info'>
    <a className='author'>
    {author.username}
    </a>
    <time>{formatISO9075(new Date (createdAt))}</time>
    </p>
    <p className='summary'>{summary}</p>
    </div>
    </div>
  )
}

export default Post