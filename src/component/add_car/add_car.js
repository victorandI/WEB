import './add_car.css';
import { useState, useEffect } from 'react';

const Add_car = (props) => {
    const [name, setName] = useState();
    const [year, setYear] = useState();
    const [price, setPrice] = useState();
    const [imgUrl, setImgUrl] = useState();

    const onChangeName = (event) => {
        setName(event.target.value);
    }
    const onChangeYaer = (event) => {
        setYear(event.target.value);
    }

    const onChangePrice = (event) => {
        setPrice(event.target.value);
    }
    const onChangeImgUrl = (event) => {
        setImgUrl(event.target.value);
    }
    const sentAddCarRequest = async () => {
        const data = {  "name":name, "productionYear":year,"price":price, "imgUrl":imgUrl};
        console.log(data)
        const res = await fetch("http://127.0.0.1:5000/car", 
        {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body:JSON.stringify(data)});
        //let lol = '';
        if(res.ok){
            //lol = await res.json();
            alert("Car add successful");
        }else{
            
            alert("something is wrong")
        }  

     }
    return (
<main className="main_add_car">
        <div className="main_head_add_car">
            <div className="main_section_add_car">
                <div className="add_car">
                    <h2>Add car</h2>
                    <input id = "name" type="text" placeholder="Car model" onChange={onChangeName}/>
                    <input id = "yaer" type="text" placeholder="Yaer" onChange={onChangeYaer}/>
                    <input id = "price" type="text" placeholder="Price per day" onChange={onChangePrice}/>
                    <input id = "imgUrl" type="text" placeholder="imgUrl" onChange={onChangeImgUrl}/>
                    <button type='submit' id = "add_car_button" onClick={sentAddCarRequest}>Add car</button>
                </div>
            </div>
        </div>
    </main>
    )
}

export default Add_car;