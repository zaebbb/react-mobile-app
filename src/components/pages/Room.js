import React from 'react';

function Room() {
    return (
        <main>
            <h1>Комната 1</h1>
            <div className="btns">
                <a href="#" className="btn">
                    <p>Устройство 1</p>
                </a>
                <a href="#" className="btn">
                    <p>Устройство 2</p>
                </a>
                <a href="#" className="btn">
                    <p>Датчик 1</p>
                </a>
                <a href="#" className="btn">
                    <p>Датчик 2</p>
                </a>
            </div>
        </main>
    );
}

export default Room;