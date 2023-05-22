import './cars.css';
import {useEffect, useState} from 'react';


const Cars  = (props) => {
    const onAddCarHandler = () => {
        props.AddCarHandler();
    }
    const [stylePath] = useState(
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      );
    const [allCarsList, setAllProductsList] = useState([]);
    const getCars = async (url) => {
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
        getCars('http://127.0.0.1:5000/catalog')
        console.log(localStorage.getItem('user_status') == "Admin")
        if (localStorage.getItem('user_status') == "Admin"){

            setUserType(true);
        }else{

            setUserType(false);
        }
    },[])
    
    const CarRentsHandler = (car_id, time_start, time_stop) => {
        localStorage.setItem('car_id', car_id);
        localStorage.setItem('time_start', time_start);
        localStorage.setItem('time_stop', time_stop);
        props.carRentsHandler();
    }
    
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
      setActive(!isActive);
    };
    
    const [sort, setSort] = useState();
    const [start, setStartTime] = useState();
    const [stop, setStopTime] = useState();

    const onChangeSort = (event) => {
        setSort(event.target.value);
    }

    const onStartTime = (event) => {
        setStartTime(event.target.value);
    }
    
    const onStopTime = (event) => {
        setStopTime(event.target.value);
    }

    const apply_filter = () => { 
        handleToggle()

        if (start === undefined){
            setStartTime('undefined')
        }
        if (stop === undefined ){
            setStopTime('undefined')
        }
        if (sort === undefined){
            setSort('undefined')
        } 
        if (start === "" || stop === ""){
            getCars('http://127.0.0.1:5000/catalog/'+sort+'/undefined/undefined')
        }else{
            getCars('http://127.0.0.1:5000/catalog/'+sort+'/'+start+'/'+stop)
        }

    }
    return(
    <div>  
        <link rel="stylesheet" type="text/css" href={stylePath} />
        <div className="filter-section">
        <div className="filter-bar">
            <a className={`edit-car-${isAdmin  ? "opacity" : "unopacity"}`} onClick={onAddCarHandler} >Add new car</a>
            <a className="filter-dropdown"  onClick={handleToggle}>
            <i className="fa fa-filter" aria-hidden="true"></i>
            <span className="filter-dropdown-text">Filter dataset</span> </a>
        </div>

        <div className={`edit-filter-modal-${isActive ? "opacity" : "unopacity"}`}>
            <select id = 'sort_by' onChange={onChangeSort}>
            <option>Default</option>
            <option>From cheap to expensive</option>
            <option>From expensive to cheap</option>
            <option>Year, descending</option>
            <option>Year, ascending</option>
            </select>
            <input type="date" id = 'start' min="2020-01-01" max="2024-12-31" onChange={onStartTime}/>
            <input type="date" id = 'stop' min="2020-01-01" max="2024-12-31" onChange={onStopTime}/>
            <button className="apply-button" onClick={apply_filter}>Apply</button>
            <button className="text-button" onClick={handleToggle}>Cancel</button>
        </div>
        </div>
        <div className="cars">

          <div className="cars_row">
          {allCarsList.map(car =>
            <div className="cars_col">
                <a class="courses-image" onClick={ () => {
                    CarRentsHandler(car.idCar, start, stop)
                }}>
                    <img src={car.imgUrl} width="330" height="180" className="img-responsive" alt=""/>
                </a>
                <div className="cars_detail">
                    <h3><a onClick={ () => {
                    CarRentsHandler(car.idCar, start, stop)
                }}>{car.name}</a></h3>
                    <p className="lead"> <strong>${car.price}</strong> <small>per day</small></p>
                    <p>{car.productionYear} year </p>
                </div>
                <div className="courses-info">
                <a onClick={ () => {
                    CarRentsHandler(car.idCar, start, stop)
                }}>Rent Now</a>
                </div> 
            </div>   
            )}
          </div>

        </div>
    </div>
    )
}

export default Cars;