import { useState } from "react";

function Pro6() {

    const [marks, setMarks] = useState("");
    const [result, setResult] = useState("");

    const checkResult = () => {

        const promise = new Promise((resolve, reject) => {

            if (marks >= 35) {
                resolve("Student Passed");
            } else {
                reject("Student Failed");
            }

        });

        promise
            .then((message) => {
                setResult(message);
            })
            .catch((message) => {
                setResult(message);
            });
    };

    return (
        <div>
            <h1>6. Student Result</h1>

            <input
                type="number"
                placeholder="Enter Marks"
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
            />

            <br /><br />

            <button onClick={checkResult}>
                Check Result
            </button>

            <h3>{result}</h3>
        </div>
    );
}

export default Pro6;