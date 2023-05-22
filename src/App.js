import './App.css';
import Header from './component/header/header';
import CarsTitle from './component/title/cars/cars_title';
import HomeTitle from './component/title/home/home_title';
import PopularCars from './component/popular_cars/popular_cars';
import Footer from './component/footer/footer';
import Cars from './component/cars/cars';
import RentCar from './component/title/rent_car/rent_car';
import CarInfo from './component/car_info/car_info';
import Login from './component/login/login';
import Register from './component/register/register'
import Account from './component/account/account'
import Add_car from './component/add_car/add_car'

import {useEffect, useState} from 'react';



function App() {
  
  


  const [isHome, setIsHome] = useState(true);
  const [isCars, setIsCars] = useState(false);
  const [isRentCars, setIsRentCars] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [isRegister, setRegister] = useState(false);
  const [isAccount, setAccount] = useState(false);
  const [isAddCar, setAddCar] = useState(false);

  const [isLoginAcount, setLoginAcount] = useState(false);

  const LogOut = () => {
    setLoginAcount(false);
    localStorage.setItem('token', "null");
    localStorage.setItem('user_status', "null");
    localStorage.setItem('idUser', "null")
    window.location.reload();
  }

  const homeHandler = () => {
    setIsHome(true);
    setIsCars(false);
    setIsRentCars(false);
    setLogin(false);
    setRegister(false);
    setAccount(false);
    setAddCar(false);
  }
  const carsHandler = () => {
    setIsCars(true);
    setIsHome(false);
    setIsRentCars(false);
    setLogin(false);
    setRegister(false);
    setAccount(false);
    setAddCar(false);
  }

  const carRentsHandler = () => {
    setIsRentCars(true);
    setIsHome(false);
    setIsCars(false);
    setLogin(false);
    setRegister(false);
    setAccount(false);
    setAddCar(false);
  }

  const loginHandler = () => {
    setLogin(true);
    setIsHome(false);
    setIsCars(false);
    setIsRentCars(false);
    setRegister(false);
    setAccount(false);
    setAddCar(false);
  }

  const RegisterHandler = () => {
    setRegister(true);
    setLogin(false);
    setIsHome(false);
    setIsCars(false);
    setIsRentCars(false);
    setAccount(false);
    setAddCar(false);
  }

  const AccountHandler = () => {
    setAccount(true);
    setRegister(false);
    setLogin(false);
    setIsHome(false);
    setIsCars(false);
    setIsRentCars(false);
    setAddCar(false);
  }
  const AddCarHandler = () => {
    setAccount(false);
    setRegister(false);
    setLogin(false);
    setIsHome(false);
    setIsCars(false);
    setIsRentCars(false);
    setAddCar(true);
  }
  return (
    <div>
      <Header homeHandler={homeHandler} carsHandler={carsHandler} isLoginAcount={isLoginAcount} loginHandler={loginHandler} LogOut={LogOut} RegisterHandler={RegisterHandler} AccountHandler={AccountHandler}/>

      {isHome && <HomeTitle/>}
      {isHome && <PopularCars carsHandler={carsHandler}/>}

      {isCars && <CarsTitle/>}
      {isCars && <Cars carRentsHandler={carRentsHandler} AddCarHandler={AddCarHandler} />}

      {isRentCars && <RentCar/>}
      {isRentCars && <CarInfo/>}

       {isLogin && <Login setLoginAcount={setLoginAcount} />}


      {isRegister && <Register/>}

      {isAccount && <Account LogOut={LogOut}/>}

      {isAddCar && <Add_car />}
      <Footer/>
    </div>
  );
}

export default App;