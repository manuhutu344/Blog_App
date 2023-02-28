import { formatISO9075 } from 'date-fns'
import React from 'react'

function Post({title, summary, cover, content, createdAt}) {
  return (
    <div className='post'>
    <div className='image'>
    <img src='https://cdn.gamebrott.com/wp-content/uploads/2023/02/Gameplay-Resident-Evil-4-Remake-Header.jpg' alt='' />
    </div>
    <div className='texts'>
    <h2>{title}</h2>
    <p className='info'>
    <a className='author'>
    Fernando
    </a>
    <time>{formatISO9075(new Date (createdAt))}</time>
    </p>
    <p className='summary'>{summary}</p>
    </div>
    </div>
  )
}

export default Post