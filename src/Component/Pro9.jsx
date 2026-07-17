import { useState } from "react";

class Student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
}

function Pro9() {

    const [students, setStudents] = useState([]);

    const studentData = [
        new Student("Aryan", 22, "MCA"),
        new Student("Riya", 21, "BCA"),
        new Student("Rahul", 23, "MCA"),
        new Student("Neha", 20, "BSc"),
        new Student("Priya", 22, "BCom")
    ];

    const loadStudents = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(studentData);
            }, 3000);
        });
    };

    const displayStudents = async () => {
        const data = await loadStudents();
        setStudents(data);
    };

    return (
        <div>
            <h1>9. Student Management System</h1>

            <button onClick={displayStudents}>
                Load Students
            </button>

            <br /><br />

            {
                students.map((student, index) => {

                    const { name, age, course } = student;

                    return (
                        <div key={index}>
                            <h3>Student {index + 1}</h3>

                            <p>Name : {name}</p>
                            <p>Age : {age}</p>
                            <p>Course : {course}</p>

                            <hr />
                        </div>
                    );
                })
            }

            <h2>Student Names</h2>

            {
                students.map((student) => (
                    <p key={student.name}>
                        {student.name}
                    </p>
                ))
            }

        </div>
    );
}

export default Pro9;