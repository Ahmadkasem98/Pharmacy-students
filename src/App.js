import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { StudentContext } from "./Context/StudentContext";
import StudentForm from "./Pages/StudentsForm";
import Table from "./Pages/StudentsTable";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  const [students, setStudents] = useState([]);

  return (
    <StudentContext.Provider value={{ students, setStudents }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Students" />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Student" element={<StudentForm />} />
          <Route path="/Students" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </StudentContext.Provider>
  );
}

export default App;
