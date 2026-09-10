import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import Post from './components/Post'
import Footer from './components/Footer'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
   
    <Sidebar></Sidebar>
       <div className='content'>
    <Header></Header>
    <CreatePost></CreatePost>
    <Post></Post>
    <Footer></Footer>
    </div>
    </div>
  )
}

export default App;
