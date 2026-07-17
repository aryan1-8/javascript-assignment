import { useState } from "react";

function Pro7() {

    const [message, setMessage] = useState("");

    const paymentProcess = () => {

        setMessage("Processing Payment...");

        const payment = new Promise((resolve) => {

            setTimeout(() => {
                resolve("Payment Successful");
            }, 4000);

        });

        payment.then((result) => {
            setMessage(result);
        });

    };

    return (
        <div>
            <h1>7. Payment System</h1>

            <button onClick={paymentProcess}>
                Make Payment
            </button>

            <h3>{message}</h3>
        </div>
    );
}

export default Pro7;