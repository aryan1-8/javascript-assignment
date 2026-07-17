import { useState } from "react";

function Pro5() {

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");

    const swapNumbers = () => {
        [num1, num2] = [num2, num1];
        setNum1(num1);
        setNum2(num2);
    };

    return (
        <div>
            <h1>5. Swap Two Numbers</h1>

            <input
                type="number"
                placeholder="Enter First Number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />

            <br /><br />

            <input
                type="number"
                placeholder="Enter Second Number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />

            <br /><br />

            <button onClick={swapNumbers}>
                Swap
            </button>

            <h3>First Number : {num2}</h3>
            <h3>Second Number : {num1}</h3>
        </div>
    );
}

export default Pro5;