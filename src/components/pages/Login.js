import React from 'react';

function Login() {
    return (
        <main>
            <h1>Авторизация</h1>
            <form action="#" className="form">
                <input type="text" placeholder="Логин" className="login" />
                    <input type="password" placeholder="Пароль" className="pass" />
                        <input type="submit" value="ВОЙТИ" className="form_btn" />
            </form>
        </main>
    );
}

export default Login;