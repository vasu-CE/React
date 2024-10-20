import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/Home.jsx'
import About from './component/AboutUs.jsx'
import Contact from './component/ContactUs.jsx'
import User from './component/User.jsx'
import Github, { githubInfoLoader } from './component/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout />,
//     children : [
//       {
//         path : "",
//         element : <Home />
//       },
//       {
//         path : "about",
//         element : <About />
//       },
//       {
//         path : "contact",
//         element : <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path="" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/user/:id" element={<User/>} />
      <Route
        loader = {githubInfoLoader}
        path="/github"
        element={<Github/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
