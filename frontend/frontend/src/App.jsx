import { Route, Routes } from "react-router-dom"
import { CreateBook, DeleteBook,EditBook, Home,ShowBook } from "./pages/index.js"


function App() {

  return (
    <>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/books/create" element={<CreateBook/>}/>
    <Route path="/books/delete/:id" element={<DeleteBook/>}/>
    <Route path="/books/edit/:id" element={<EditBook/>}/>
    <Route path="/books/details/:id" element={<ShowBook/>}/>
  </Routes>

    </>
  )
}

export default App
