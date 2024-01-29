import { Logo } from "../../assets/Logo";
import './style.scss'

export const Header = () => {
    return(
        <>
            <header>
                <div className="container-main">
                    <nav className="nav">
                        <div className="nav-left">
                            <div className="logo">
                                <Logo />
                            </div>
                        </div>
                        <div className="nav-rigt"></div>
                    </nav>
                </div>
            </header>
        </>
    );
}