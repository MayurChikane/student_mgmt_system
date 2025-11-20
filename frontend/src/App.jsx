import './App.css'
import StudentList from './components/StudentList'
import StudentComponent from './components/StudentComponent'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* // http://localhost:3000 */}
          <Route path='/' element={<Home />}></Route>
          {/* // http://localhost:3000/dashboard */}
          <Route path='/dashboard' element={<Dashboard />}></Route>
          {/* // http://localhost:3000/students */}
          <Route path='/students' element={<StudentList />}></Route>
          {/* // http://localhost:3000/add-student */}
          <Route path='/add-student' element={<StudentComponent />}></Route>
          {/* // http://localhost:3000/edit-student/1 */}
          <Route path='/edit-student/:id' element={<StudentComponent />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
