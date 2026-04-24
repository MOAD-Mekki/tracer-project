import './Dash.css'
import Card from './UserCard';
import { useState, useEffect } from 'react'

export default function Dash() {

    const [dialogs, setDialogs] = useState([]);

    useEffect( () => {
       async function getDialogs() {

            const res = await fetch("http://localhost:3000/listDialogs");

            const data = await res.json();

            setDialogs(data);
        }

        getDialogs();
    },[])


    console.log(dialogs);

    const dialogsCard = dialogs.map((dialog,index) => {
        return (
            <div key={index}>
                <Card id={dialog.id} username={dialog.title}/>
            </div>
        )
    })
    

    return (
        <div className='dash-page'>
            <div className="dash-title"><h1>Your Users Information :</h1></div>
            <div className="dash-input">
                <input type="text" placeholder="Enter the user's ID" className='id-input'/>
                <button className='trace-btn'>Trace !</button>
            </div>
            <div className="cards-cont">{dialogsCard}</div>
        </div>
    )
}