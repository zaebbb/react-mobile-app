import React from 'react';

function Footer() {
    return (
        <div className="footer">
            <a href="/api/" className="logo">
                Logo
            </a>
            <ul>
                <li><a href="/api/">Главная</a></li>
                <li><a href="/api/login">Авторизация</a></li>
                <li><a href="/api/devices">Устройства и датчики</a></li>
                <li><a href="/api/macros">Макросы</a></li>
            </ul>
        </div>
    );
}

export default Footer;