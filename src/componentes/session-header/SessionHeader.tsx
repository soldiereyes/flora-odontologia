import React from 'react';
import './SessionHeader.css';

interface HeaderProps {
    title: string;
}

const SessionHeader:React.FC<HeaderProps> = ({title}) =>{
    return(
        <header className="header">
            <h1 className="header-title">{title}</h1>
        </header>

    )
}
export default SessionHeader;
