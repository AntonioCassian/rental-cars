import { Logo } from "../../assets/Logo";
import { FaUser } from 'react-icons/fa'
import './style.scss'

export const Header = () => {
    return(
        <>
            <header>
                <div className="container-main">
                    <nav className="nav">
                        <div className="nav-left">
                            <a href="#" className="link"><Logo /></a>
                            <a href="#" className="link">Home</a>
                            <a href="#" className="link">Toyota</a>
                            <a href="#" className="link">Volkswage</a>
                            <a href="#" className="link">Fiat</a>
                            <a href="#" className="link">Chevrolet</a>
                            <a href="#" className="link">Hiunday</a>
                        </div>
                        <div className="nav-rigt"><FaUser /></div>
                    </nav>
                </div>
            </header>
        </>
    );
}