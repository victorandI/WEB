import './car_info.css';
import './bootstrap.min.css';
import { useEffect, useState } from 'react';


function CarInfo(props) {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const start_time = startDate;
    const stop_time = endDate;

    const [CarInfo, setAllProductsList] = useState([]);
    const getCar = async (url) => {
        fetch(url, {
            method: 'GET',
        })
        .then(res=>{
            if(res.ok){
                return res.json()
            }else{
                alert("something is wrong")
            }
        }).then(data =>{
            setAllProductsList(data);
            }
        ).catch((err) => {
            console.error(err)
        }
        );
     }
    const [isAdmin, setUserType] = useState(true);
    useEffect(() => {
        getCar('http://127.0.0.1:5000/car/' + localStorage.getItem('car_id'))
        console.log(localStorage.getItem('user_status') == "Admin")
        if (localStorage.getItem('user_status') == "Admin"){

            setUserType(true);
        }else{

            setUserType(false);
        }
    },[])


    const makeReservation = async () => {
        const authToken = localStorage.getItem('token');
        if (authToken === "null"){
            alert("please log in to the site");
            return;
        }
        
        console.log(start_time, stop_time)
        if (start_time === "undefined" || stop_time === "undefined"){
            alert("you did not choose the time");
            return;
        }

        const data = {  "startDate": start_time, "endDate":stop_time,"sum":CarInfo.price * (diffDays+1), "idUser":parseInt(localStorage.getItem('idUser')), "idCar":CarInfo.idCar};

        const res = await fetch("http://127.0.0.1:5000/reserv", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + authToken
            },
            body: JSON.stringify(data)
        }).then(res => {
            if (res.ok) {
                alert("Reservation successful");
            } else {

                const errorResponse = res.text();
                alert(`Error: ${errorResponse}`);
            }
        }
            ).catch ((err) => {
            console.error(message)
        }
        );
     }
     const date1 = new Date(localStorage.getItem('time_start'))
     const date2 = new Date(localStorage.getItem('time_stop'))
     const diffTime = Math.abs(date2 - date1);
     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
     var days;
     if (isNaN(diffDays)){
        days = 0;
     }else{
        days = diffDays;
     }

     const deleteCar = async () => {
        const authToken = localStorage.getItem('token');
        const url ="http://127.0.0.1:5000/car/" +  localStorage.getItem('car_id');
        const res = await fetch(url, 
        {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + authToken
            }
        });
        if(res.ok){
            alert("delete successful");
            localStorage.setItem('car_id', "null");
            window.location.reload();
        }else{
            
            alert("something is wrong")
        }  ;
     }

    return(
        <div>
        <div className = "car_list">
            <div className="car_list_row">
                <div className="car_list_col1">
                    <img src={CarInfo.imgUrl} width="600" height="330"/>
                </div>
                <div className="car_list_col2">
                    <h3>{CarInfo.name}</h3>
                    <p>This project was designed for one of the biggest Swiss entertainment centers that 
                    grew in popularity in 2009. 
                    Everything was completed in less than a month.
                    </p>
                    <div className ="divade_line"></div>
                    <div className ="car_info">
                        <ul>
                <li>
                  Rent from{' '}
                  <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                </li>
                <li>
                  Rent until{' '}
                  <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                </li>
              </ul>
              <ul>
                <li>
                  Total price {CarInfo.price * (days + 1)}$
                </li>
              </ul>
            </div>
                    <a className="rent" onClick = {makeReservation}>RENT NOW</a>
                    
                </div>
                <a className={`delete_car_${isAdmin  ? "opacity" : "unopacity"}` } onClick = {deleteCar}>Delete Car</a>
            </div>
        </div>  
        <div class="container">
        <div class="row mb-4">
            <div class="col-md-12">
                <h4 class="border-bottom pb-2">Comments</h4>
            </div>
            <div class="col-md-12">
                <div class="form-group">
                    <label for="">Write a comment</label>
                    <textarea id="textarea" rows="3" class="form-control"></textarea>
                </div>
            </div>
            <div class="col-md-12">
                <button id="submitBtn" class="btn btn-primary float-right">Post comment</button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="typing text-success"></div>
                <ul class="comment__box">
  
                </ul>
            </div>
        </div>
    </div>
        </div>
    )
}

export default CarInfo;