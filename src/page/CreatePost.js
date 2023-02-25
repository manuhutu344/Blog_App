import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

function CreatePost() {
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [content, setContent] = useState('')
    const [files, setFiles] = useState('')
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
      }) 
      console.log(await response.json())
    }
  return (
    <div>
    <form onSubmit={createNewPost}>
    <input type='title' placeholder='Masukan Judul Yang Anda Inginkan' value={title} onChange={e => setTitle(e.target.value)} />
    <input type= 'summary' placeholder='Masukan Ringkasan Dari Konten Anda' value={summary} onChange={e => setSummary(e.target.value)} />
    <input type= 'file'  onChange={e => setFiles(e.target.files)} />
    <ReactQuill value={content} onChange={newValue => setContent(newValue)} modules={modules} formats={formats} />
    <button style={{marginTop:'5px'}}>Buat</button>
    </form>
    </div>
  )
}

export default CreatePost