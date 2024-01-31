import { Logo } from "../../assets/Logo";
import { FaUser } from 'react-icons/fa'
import './style.scss'
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
    const links = [
        { name: <Logo />, path: '' },
        { name: 'Home', path: '/' },
        { name: 'Toyota', path: '/toyota' },
        { name: 'Volkswage', path: '/volkswage' },
        { name: 'Fiat', path: '/fiat' },
        { name: 'Chevrolet', path: '/chevrolet' },
        { name: 'Hiunday', path: '/hiunday' }
    ]
    const {pathname} = useLocation();
    return (
        <>
            <header>
                <div className="container-main">
                    <ul className="nav">
                        <li className="nav-left">
                            {links.map((item, index) => (
                                <Link to={item.path} className={pathname === item.path ? "active" : "link"} key={index}>
                                    {item.name}
                                </Link>
                            ))}
                        </li>
                        <div className="nav-right"><FaUser /></div>
                    </ul>
                </div>
            </header>
        </>
    );
}