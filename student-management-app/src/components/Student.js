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
    setStudents((prev) => [...prev, student]);
    setStudent({ regno: "", name: "", course: "", gpa: "0.0" }); // Clear form
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

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
        <li key={index}>{s.name}</li>
      ))}
    </ul>
    </div>
  );
}
