function Pro8() {

    class StudentDetails {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    const student1 = new StudentDetails("Aryan", 22);
    const student2 = new StudentDetails("Riya", 21);
    const student3 = new StudentDetails("Rahul", 23);

    const students = [student1, student2, student3];

    return (
        <div>
            <h1>8. Student Information</h1>

            {
                students.map((student, index) => (
                    <div key={index}>
                        <p>Name : {student.name}</p>
                        <p>Age : {student.age}</p>
                        <hr />
                    </div>
                ))
            }
        </div>
    );
}

export default Pro8;