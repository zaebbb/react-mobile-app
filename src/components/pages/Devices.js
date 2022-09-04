import React from 'react';

function Devices() {
    return (
        <main>
            <h1>Устройства и датчики</h1>
            <h3>Устройства</h3>
            <div className="cards">
                <a className="card" href="#">
                    <div className="head_card">
                        <p>Устройства 1</p>
                    </div>
                    <p className="card_content">Здесь будут располагаться информация о состоянии подключенного
                        устройства и будет отражено основное состояние</p>
                </a>
                <a className="card" href="#">
                    <div className="head_card">
                        <p>Устройства 2</p>
                    </div>
                    <p className="card_content">Здесь будут располагаться информация о состоянии подключенного
                        устройства и будет отражено основное состояние</p>
                </a>
            </div>
            <h3>Избранное</h3>
            <div className="btns">
                <a href="#" className="btn btn-vks">
                    <p>Датчик 1</p>
                    <p className="vkl">ВКЛ</p>
                </a>
                <a href="#" className="btn btn-vks">
                    <p>Датчик 2</p>
                    <p className="vkl">ВКЛ</p>
                </a>
            </div>
        </main>
    );
}

export default Devices;