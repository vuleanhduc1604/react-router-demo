import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'

import Home from "./pages/home/Home.jsx"
import About from "./pages/about/About.jsx"
import Contact from "./pages/contact/Contact.jsx"
import Layout from './components/layout/Layout'
import Posts from './pages/posts/Posts'
import PostDetail from './pages/post-detail/PostDetail'
const routes = createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path="/" element={<Home />} loader={Home.loader}/>
    <Route path="/post/:postId" element={<PostDetail/>} loader={PostDetail.loader}/>
    <Route path='*' element={<div>Page not found</div>}/>
  </Route>
)
const router = createBrowserRouter(routes)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
)
