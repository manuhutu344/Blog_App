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
  return (
    <div>
    <form>
    <input type='title' placeholder='Masukan Judul Yang Anda Inginkan' />
    <input type= 'summary' placeholder='Masukan Ringkasan Dari Konten Anda' />
    <input type= 'file' />
    <ReactQuill value={content} modules={modules} formats={formats} />
    <button style={{marginTop:'5px'}}>Buat</button>
    </form>
    </div>
  )
}

export default CreatePost