import './Logo.css'
import { IconBrandTelegram } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

export default function Logo() {

    const navigat = useNavigate();

    return (
        <div className='logo'>
            <div className='content'>
                <div className="border">
                    <IconBrandTelegram className='tele-icon'/>
                </div>
                <div className="title">
                    <h2>Telegram Tracer</h2>
                </div>
                <div className="text">
                    <p>Want to trace a Telegram Contact? Here's the solution that you need.
                        Telegram Tracer was made to track any Contacts that you want!
                    </p>
                </div>
                <div className="btn-div"><button className='nav-btn' onClick={() => navigat("/form")}>Get Started !</button></div>
            </div>
        </div>
    );
}