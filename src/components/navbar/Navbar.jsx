import logo from '../../assets/img/blogger.png'
import "bulma/css/bulma.min.css";


const NavLogo = () => {
    return (
        <div className="nav-item ">
            <img
                src={logo} width="10%"
            />
        </div>

    )
}

const NavButton = ({ text, onClickHandler }) => {
    return (
        <span className="nav-button" onClick={onClickHandler}>
            {text}
        </span>
    );
};

const NavLink = ({ text, onclickHandler }) => {
    return (
        <button className="button" onClick={onclickHandler}>{text}</button>
    );
};

export const Navbar = ({ toggleYoAnderson, toggleListTasks }) => {


    return (

        <nav className="navbar is-light">
            <div className="navbar-brand">
                <NavLogo />
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <NavLink text="Anderson Uriel Sanchez Rogel" onclickHandler={toggleYoAnderson} />
                            <NavLink text="Task List" onclickHandler={toggleListTasks} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
