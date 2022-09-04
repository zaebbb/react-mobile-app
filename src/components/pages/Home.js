import React from 'react';

function Home() {
    return (
        <main>
            <h1>Главная</h1>
            <h3>Комнаты</h3>
            <div className="cards">
                <a className="card" href="/api/rooms/1">
                    <div className="head_card">
                        <p>Комната 1</p>
                        <p><i className="fa fa-long-arrow-right" aria-hidden="true"></i></p>
                    </div>
                    <img src="./../../images/cardBg.jpg" />
                </a>
                <a className="card" href="/api/rooms/1">
                    <div className="head_card">
                        <p>Комната 2</p>
                        <p><i className="fa fa-long-arrow-right" aria-hidden="true"></i></p>
                    </div>
                    <img src="./../../images/cardBg.jpg" />
                </a>
            </div>
            <h3>Избранное</h3>
            <div className="btns">
                <a href="#" className="btn">
                    <p>Устройство 1</p>
                    <p><i className="fa fa-long-arrow-right" aria-hidden="true"></i></p>
                </a>
                <a href="#" className="btn">
                    <p>Устройство 2</p>
                    <p><i className="fa fa-long-arrow-right" aria-hidden="true"></i></p>
                </a>
                <a href="#" className="btn">
                    <p>Датчик 1</p>
                    <p><i className="fa fa-long-arrow-right" aria-hidden="true"></i></p>
                </a>
                <a href="#" className="btn">
                    <p>Датчик 2</p>
                    <p><i className="fa fa-long-arrow-right" aria-hidden="true"></i></p>
                </a>
            </div>
        </main>
    );
}

export default Home;