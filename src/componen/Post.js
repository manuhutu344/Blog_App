import React from 'react'

function Post() {
  return (
    <div className='post'>
    <div className='image'>
    <img src='https://cdn.gamebrott.com/wp-content/uploads/2023/02/Gameplay-Resident-Evil-4-Remake-Header.jpg' alt='' />
    </div>
    <div className='texts'>
    <h2>Residen Evil Nich</h2>
    <p className='info'>
    <a className='author'>
    Penulis
    </a>
    <time>2023-02-13 8:32</time>
    </p>
    <p className='summary'>Resident Evil adalah game buatan capcom, yang menjadi game yang banyak dimainkan.</p>
    </div>
    </div>
  )
}

export default Post