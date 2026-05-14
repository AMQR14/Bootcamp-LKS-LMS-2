import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import AdminDashboard from './pages/Admin/AdminDashboard'
import AdminUser from './pages/Admin/AdminUser'
import AdminTeacher from './pages/Admin/AdminTeacher'
import AdminStudent from './pages/Admin/AdminStudent'
import AdminClasses from './pages/Admin/AdminClasses'
import AdminCourses from './pages/Admin/AdminCourses'
import AdminExams from './pages/Admin/AdminExams'
import AdminQuestion from './pages/Admin/AdminQuestion'
import TeacherDashboard from './pages/Teacher/TeacherDashboard'
import TeacherCourse from './pages/Teacher/TeacherCourse'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>

        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        <Route path='/admin/dashboard/user' element={<AdminUser/>}/>
        <Route path='/admin/dashboard/teacher' element={<AdminTeacher/>}/>
        <Route path='/admin/dashboard/student' element={<AdminStudent/>}/>
        <Route path='/admin/dashboard/class' element={<AdminClasses/>}/>
        <Route path='/admin/dashboard/class/course' element={<AdminCourses/>}/>
        <Route path='/admin/dashboard/exam' element={<AdminExams/>}/>
        <Route path='/admin/dashboard/exam/question' element={<AdminQuestion/>}/>

        <Route path='/teacher/dashboard' element={<TeacherDashboard/>}/>
        <Route path='/teacher/dashboard/course' element={<TeacherCourse/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
