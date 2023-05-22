import './popular_cars.css';
import porsche from "../../images/file.jpg";
import {useEffect, useState} from 'react';

const PopularCars = (props) => {

    const page = () => {
        props.carsHandler();
    }
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
            //console.log(data)
            setAllProductsList(data);
            
            }
        ).catch((err) => {
            console.error(err)
        }
        );
     }
    useEffect(() => {
        getCars('http://127.0.0.1:5000/catalog')
    },[])
    return (
        <div className="popular">
            <div className="popular_section">
                <div className="popular_section_title">
                      <h1>Popular Cars</h1>
                </div>
                <div className="popular_section_content">
                    
 
                    <div className = "grid" >
                    {allCarsList.map(car =>
                        <a onClick={page}>
                            <div className="grid-item">
                                <img src={car.imgUrl} alt="" width="360" height="200"/>
                                <div className="overlay">
                                    <p className="centered" >SEE MORE</p>
                                </div>
                                <h3 >{car.name}</h3>
                            </div>
                        </a>
                    )}   
                    </div>
                </div>
            </div>
              
        </div>
    )
}

export default PopularCars;