import { Link, useLocation } from "react-router-dom";
import { FaUser } from 'react-icons/fa'

import { Logo } from "../../assets/Logo";
import { Popup } from "../Popup";

import { useState } from "react";
import './style.scss'

export const Header = () => {
    const {pathname} = useLocation();
    const [open, setOpen] = useState(false);

    const handlerPop = () => {
        return setOpen(true)
    }

    const links = [
        { name: <Logo />, path: '/' },
        { name: 'Home', path: '/' },
        { name: 'Toyota', path: '/toyota' },
        { name: 'Volkswage', path: '/volkswage' },
        { name: 'Fiat', path: '/fiat' },
        { name: 'Chevrolet', path: '/chevrolet' },
        { name: 'Hiunday', path: '/hiunday' }
    ]

    return (
        <>
            <header>
                {open && <Popup close={setOpen} />}
                <div className="container-main">
                    <ul className="nav">
                        <li className="nav-left">
                            {links.map((item, index) => (
                                <Link to={item.path} className={pathname === item.path ? "active" : "link"} key={index}>
                                    {item.name}
                                </Link>
                            ))}
                        </li>
                        <div className="nav-right" onClick={handlerPop}><FaUser /></div>
                    </ul>
                </div>
            </header>
        </>
    );
}