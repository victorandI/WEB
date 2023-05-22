import './account.css';
import { useState, useEffect } from 'react';

const Account = (props) => {
    const onLogOut = () => {
        props.LogOut();
    }

    const sentDelRequest = async () => {
        //if(password.length >= 5){
            const authToken = localStorage.getItem('token');
            const url ="http://127.0.0.1:5000/user/" +  localStorage.getItem('idUser');
            console.log(url); 
            console.log(authToken); 
            const res = await fetch(url, 
            {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + authToken
                }
            });
            if(res.ok){
                //lol = await res.json();
                alert("delete successful");
                localStorage.setItem('token', "null");
                localStorage.setItem('login', "null");
                window.location.reload();
            }else{
                
                alert("something is wrong")
            }  ;
             //}
     }
    return (
<main className="main_account">
        <div className="main_head_account">
            <div className="main_section_account">
                <div className="account">
                    <h2>Your profile</h2>
                    <label className = "label" for="fname">Username:</label>
                        <input id="Username" type="text" placeholder="johndoe" />
                    <label className = "label" for="fname">First name:</label>
                    <input id = "firstName" type="text" placeholder="John" />
                    <label className = "label" for="fname">Last name:</label>
                    <input id = "lastName" type="text" placeholder="Doe" />
                    <label className = "label" for="fname">Phone:</label>
                    <input id = "phone" type="text" placeholder="+380978725761" />
                    <label className = "label" for="fname">Email:</label>
                        <input id="email" type="text" placeholder="johndoe@example.com" />
                    <label className = "label" for="fname">Password:</label>
                    <input type="password" placeholder="Password" />
                    <button onClick={sentDelRequest}>Delete</button>
                    <button onClick={onLogOut} >Log out</button>
                </div>
            </div>
        </div>
    </main>
    )
}

export default Account;