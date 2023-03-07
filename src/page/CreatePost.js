import React, { useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import { Navigate } from 'react-router-dom';
import Editor from '../componen/Editor';



function CreatePost() {
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [content, setContent] = useState('')
    const [files, setFiles] = useState('')
    const [redirect, setRedirect] = useState(false)
    async function createNewPost(e){
      const data = new FormData()
      data.set('title', title)
      data.set('summary', summary)
      data.set('content', content)
      data.set('file', files[0])
      e.preventDefault()
      const response = await fetch('http://localhost:9001/post/post', {
        method: 'POST',
        body: data,
        credentials:'include', 
      }) 
      if(response.ok){
        setRedirect(true)
      }
    }

    if(redirect){
      return <Navigate to={'/'} />
    }

  return (
    <div>
    <form onSubmit={createNewPost}>
    <input type='title' placeholder='Masukan Judul Yang Anda Inginkan' value={title} onChange={e => setTitle(e.target.value)} />
    <input type= 'summary' placeholder='Masukan Ringkasan Dari Konten Anda' value={summary} onChange={e => setSummary(e.target.value)} />
    <input type= 'file'  onChange={e => setFiles(e.target.files)} />
    <Editor value={content} onChange={setContent} />
    <button style={{marginTop:'5px'}}>Buat</button>
    </form>
    </div>
  )
}

export default CreatePost