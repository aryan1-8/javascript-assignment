import { useState } from "react";

class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    area() {
        return this.length * this.width;
    }
}

function Pro3() {

    const [length, setLength] = useState("");
    const [width, setWidth] = useState("");
    const [result, setResult] = useState("");

    const findArea = () => {

        if (length === "" || width === "") {
            setResult("Please enter both length and width.");
            return;
        }

        const rect = new Rectangle(Number(length), Number(width));

        setResult(`Area = ${rect.area()}`);
    };

    return (
        <div>
            <h1>3. Rectangle Area</h1>

            <input
                type="number"
                placeholder="Enter Length"
                value={length}
                onChange={(e) => setLength(e.target.value)}
            />

            <br /><br />

            <input
                type="number"
                placeholder="Enter Width"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
            />

            <br /><br />

            <button onClick={findArea}>
                Find Area
            </button>

            <h3>{result}</h3>
        </div>
    );
}

export default Pro3;