import { useState } from "react";

function Odd_even() {

    const [num1, setNum1] = useState("");
    const [result, setResult] = useState("");

    const odd_even = () => {

        if (num1 === "") {
            setResult("Please enter a number");
            return;
        }

        if (num1 % 2 === 0) {
            setResult(`${num1} is Even`);
        } else {
            setResult(`${num1} is Odd`);
        }
    };

    return (
        <div>
            <h1>1. Odd Even Number</h1>

            <input
                type="number"
                placeholder="Enter Number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />

            <br /><br />

            <button onClick={odd_even}>
                Result
            </button>

            <h3>{result}</h3>
        </div>
    );
}

export default Odd_even;