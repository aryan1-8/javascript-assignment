import { useState } from "react";

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    showSalary() {
        return `${this.name} earns ${this.salary}`;
    }
}

function Pro2(){
    const [result, setResult] = useState("");

    const displaySalary = () => {
        const emp = new Employee("Riya", 50000);
        setResult(emp.showSalary());
    };

    return (
        <div>
            <h1>2. Employee Details</h1>

            <button onClick={displaySalary}>
                Show Salary
            </button>

            <h3>{result}</h3>
        </div>
    );
}
export default Pro2;