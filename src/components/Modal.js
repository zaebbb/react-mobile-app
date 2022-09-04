import React, {useEffect} from 'react';

function Modal() {

    useEffect(() => {
        let menu = document.querySelector('.menu');
        let modal = document.querySelector('.modal');
        let btn_vks = document.querySelectorAll('.vkl');
        menu.addEventListener('click', () => {
            modal.classList.toggle('active');
        });
        btn_vks.forEach(e => {
            e.addEventListener('click', () => {
                e.classList.toggle('active');
                if(e.innerHTML == 'ВКЛ'){
                    e.textContent = 'ВЫКЛ';
                } else if(e.innerHTML == 'ВыКЛ'){
                    e.textContent = 'ВКЛ';
                }
            })
        })
    }, [])


    return (
        <div className="modal">
            <a href="/api/" className="logo">Logo</a>
            <ul>
                <li><a href="/api/">Главная</a></li>
                <li><a href="/api/login">Авторизация</a></li>
                <li><a href="/api/devices">Устройства и датчики</a></li>
                <li><a href="/api/macros">Макросы</a></li>
            </ul>
        </div>
    );
}

export default Modal;