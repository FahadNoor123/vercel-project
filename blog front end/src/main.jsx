import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import About from '@components/about/About'
import Home from '@components/home/Home.jsx'
import Layout from './Layout.jsx';
import Contact from '@components/contact/Contact.jsx'
import { Route } from 'react-router-dom'
import User from '@components/user/User.jsx'
import Login from '@components/login/Login.jsx'

import Github, {githubInfoLoader }  from '@components/github/Github.jsx'
import WriteBlog from '@components/writeBlog/WriteBlog.jsx'
import ReadBlog from '@components/readBlog/ReadBlog.jsx'
import YourBlog from '@components/yourBlog/YourBlog.jsx'
import EditBlog from '@components/editBlog/EditBlog.jsx'


// const router=createBrowserRouter([
//   {
//   path:'/',
//   element:<Layout/>,
//   children:[
//     {
//       path: "",
//       element:<Home/>
//     },{
//       path:"about",
//       element:<About/>
//     },{
//       path:"contact",
//       element:<Contact/>
//     }
//   ]
// }
// ])
   

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="writeblog" element={<WriteBlog/>}/>
      <Route path="readblog" element={<ReadBlog/>}/>
      <Route path="yourblog" element={<YourBlog/>}/>
      <Route path="editblog/:blogId" element={<EditBlog/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="user/:userid" element={<User/>}/>

      <Route 

      loader={githubInfoLoader}
      path="github" 
      element={<Github/>}/>
    
    
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
