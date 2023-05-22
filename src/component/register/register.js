import './register.css';
import { useState } from 'react';

const Register = (props) => {
    const [login, setLogin] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeLogin = (event) => {
        setLogin(event.target.value);
    };

    const onChangeFirstName = (event) => {
        setFirstName(event.target.value);
    };

    const onChangeLastName = (event) => {
        setLastName(event.target.value);
    };

    const onChangePhone = (event) => {
        setPhone(event.target.value);
    };

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const sentRegisterRequest = async () => {
        const data = {
            firstName: firstName,
            lastName: lastName,
            login: login,
            email: email,
            phone: phone,
            password: password
        };

        try {
            const res = await fetch('http://127.0.0.1:5000/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (res.ok) {
                alert('Registration successful');
            } else {
                alert('Something went wrong');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong');
        }

            
            //console.log(lol);
            // createCookie('token',jsonResponse,7);
            // createCookie('login',login,7);
            // location.replace("index.html")

         //   }
        // ).catch((err) => {
        //     console.error(err)
        //     // createCookie('token','0',7);
        // }
        // );

        // }else{
        //     setPasswordValid(true);
        // }
        
    }
    return (
        <main className="main_register">
        <div className="main_head_register">
            <div className="main_section_register">
                <div className="register">
                    <h2>Welcome</h2>
                    <input id = "login" type="text" placeholder="Username" onChange={onChangeLogin}/>
                    <input id = "firstName" type="text" placeholder="FirstName" onChange={onChangeFirstName}/>
                    <input id = "lastName" type="text" placeholder="LastName" onChange={onChangeLastName}/>
                    <input id = "phone" type="text" placeholder="Phone" onChange={onChangePhone}/>
                    <input id = "email" type="text" placeholder="Email" onChange={onChangeEmail}/>
                    <input id = "password" type="password" placeholder="Password" onChange={onChangePassword}/>
                    <button type='submit' id = "reg_button" onClick={sentRegisterRequest}>Register</button>
                </div>
            </div>
        </div>
        
    </main>
    )
}

export default Register;