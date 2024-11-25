import React, { useState } from "react";

export default function Student() {
  const [student, setStudent] = useState({
    regno: "",
    name: "",
    course: "",
    gpa: "0.0",
  });

  const [students, setStudents] = useState([]);

  const addStudent = () => {
    if (!student.regno || !student.name) {
      alert("Registration number and name are required");
      return;
    }
    if (students.some((s) => s.regno === student.regno)) {
      alert("Duplicate registration number");
      return;
    }
    
    setStudents((prev) => [...prev, student]);
    setStudent({ regno: "", name: "", course: "", gpa: "0.0" }); // Clear form
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const getGPAColor = (gpa) => {
    if (gpa >= 3.7) return "green"; // First Class
    if (gpa >= 3.0) return "blue";  // Second Upper
    return "orange";                // Second Lower
  };

  const deleteStudent = (regno) => {
    setStudents((prev) => prev.filter((s) => s.regno !== regno));
  };

  const totalStudents = students.length;
  const averageGPA =
    totalStudents === 0
      ? 0
      : (
          students.reduce((sum, s) => sum + parseFloat(s.gpa), 0) / totalStudents
        ).toFixed(2);

  return (
    <div>
    <form>
      <input
        type="text"
        name="regno"
        placeholder="Registration Number"
        value={student.regno}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={student.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="course"
        placeholder="Course"
        value={student.course}
        onChange={handleChange}
      />
      <input
        type="text"
        name="gpa"
        placeholder="GPA"
        value={student.gpa}
        onChange={handleChange}
      />
    </form>
    <button onClick={addStudent}>Add Student</button>

    <ul>
        {students.map((s, index) => (
          <li key={index}>
            {s.name} - {s.regno} - {s.course} -{" "}
            <span style={{ color: getGPAColor(s.gpa) }}>{s.gpa}</span>
            <button onClick={() => deleteStudent(s.regno)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>Total Students: {totalStudents}</p>
      <p>Average GPA: {averageGPA}</p>
    </div>
  );
}
