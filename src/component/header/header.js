import './header.css';

const Header = (props) => {

    const onHome = () => {
        props.homeHandler();
    }
    const onCars = () => {
        props.carsHandler();
    }
    const onLogIn = () => {
        props.loginHandler();
    }
    const onLogOut = () => {
        props.LogOut();
    }
    const onRegister = () => {
        props.RegisterHandler();
    }
    const onAccount = () => {
        props.AccountHandler();
    }
    return(
        <div>
            <header className="header">
                <div className="conteiner">
                    <nav className="menu__row">
                        <a onClick={onHome} className="menu__logo"></a>
                        <div className="menu__options">
                            <a className="option"  onClick={onHome}> Home </a>
                            <a className="option"  onClick={onCars}> Cars </a>
                            {props.isLoginAcount && <a className="option" onClick={onLogOut}> Log out </a>}
                            {!props.isLoginAcount && <a className="option" onClick={onLogIn}> Log in </a>}
                            {!props.isLoginAcount &&<a className="option" onClick={onRegister}> Register </a> }
                            {props.isLoginAcount &&<a className="option" onClick={onAccount}> Account </a> }
                        </div>  
                    </nav>
                </div>
            </header>  
        </div>
    )
}

export default Header;