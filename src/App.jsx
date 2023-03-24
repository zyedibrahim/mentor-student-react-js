import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Student } from "./Student";
import { Mentors } from "./Mentors";
import { AddstudentMentor } from "./AddstudentMentor";
import { AddMentorstudent } from "./AddMentorstudent";
import { AssignStudent } from "./AssignStudent";
import { Navbar } from "./Navbar";
// import { useState } from 'react'

function App() {
  const navigate = useNavigate();

  function handleChange(data) {
    console.log(data);
  }

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/students" element={<Student />} />
        <Route path="/add/student" element={<AddstudentMentor />} />
        <Route path="/add/mentor" element={<AddMentorstudent />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/assignstudent" element={<AssignStudent />} />
        <Route path="/" element={<Student />} />
      </Routes>
    </div>
  );
}

export default App;
