import './login.css';
import { useState, useEffect } from 'react';
import React from 'react';


const Login = (props) => {
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [passwordValid, setPasswordValid] = useState(false);

    const onChangeLogin = (event) => {
        setLogin(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    
    useEffect(() => {
        setPasswordValid(false);
    }, [password])




    const sentRequest = async () => {
        if (password.length >= 5) {
            const formData = new URLSearchParams();
            formData.append('login', login);
            formData.append('password', password);

            const res = await fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                },
                body: formData
            });

            if (res.ok) {
                const data = await res.json();
                localStorage.setItem('token', data.token);
                localStorage.setItem('idUser', data.idUser);
                localStorage.setItem('user_status', data.user_status);
                props.setLoginAcount(true);
                alert('Success');
                //console.log(isLoginAcount);
                //window.location.reload();
            } else {
                localStorage.setItem('token', null);
                alert('Could not verify');
            }
        } else {
            setPasswordValid(true);
        }
    }




    /*const sentRequest = async () => {
       if(password.length >= 5){
            const data = { "login":login, "password":password};
            //console.log(data)
           const res = await fetch("http://127.0.0.1:5000/login", 
            {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify(data)});
            let lol = '';
            if(res.ok){
                lol = await res.json();
                localStorage.setItem('token', lol);
                find_user_id(login)
                //window.location.reload();
            }else{
                localStorage.setItem('token', null);
                alert("Could not verify")
            }  
            console.log(lol);
        }

    }*/
    return (
        <main className="main_login">
            <div className="main_head_login">
                <div className="main_section_login">
                    <div className="login">
                    <h2>Welcome back</h2>
                    <input id = "login" type="text" placeholder="Username" onChange={onChangeLogin}/>
                    <input id = "password" type="password" placeholder="Password" onChange={onChangePassword}/>
                    {passwordValid && <p>Please enter your password &gt; 4</p>}
                    <button type='submit' id = "log_button" onClick={sentRequest}>Login</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login;