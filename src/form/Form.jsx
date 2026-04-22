import './Form.css'
import { useState } from 'react';

export default function Form() {

    const [phone, setPhone] = useState("");
    const [code, setCode] = useState("");
    const [hash, setHash] = useState("");


        async function submitPhone() {
            const res = await fetch("http://localhost:3000/SendPhone" , {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({phoneNumber: phone})
            });

            const data = await res.json();
            setHash(data["phoneCodeHash"]);
            
            console.log(data);
            
        }

        async function submitCode() {
            const res = await fetch("http://localhost:3000/SendVerification" , {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "phoneNumber": phone,
                    "code": code,
                    "phoneCodeHash": hash
                })
            });
            
            const data = await res.json();
            console.log(data);

        }

    return (
        <div className="page">
            <div className="content">
                <div className="form-container">
                    <h1 className="form-title">Telegram Form</h1>
                    <div className="input-group">
                        <input type="tel"
                        placeholder="Enter phone number"
                        className="input"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} />
                        <button className="get-code-btn" onClick={submitPhone}>Get Code</button>
                    </div>
                    <div className="input-group">
                        <input type="text"
                         placeholder="Enter code" 
                         className="input code-input"
                         value={code} 
                         onChange={(e) => setCode(e.target.value)} />
                    </div>
                        <button className="submit-btn" onClick={submitCode}>Submit</button>
                </div>
            </div>
        </div>
    );
}