import './style.scss'
import { FaInstagramSquare, FaFacebookSquare, FaWhatsappSquare, FaLinkedin } from "react-icons/fa"

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="foo-input">
                    <div className="container">
                        <div className="foot-flex">
                            <button className='btn'>
                                Cadastrar
                            </button>
                            <input type="email" placeholder='Cadastre-se!' />
                        </div>
                    </div>
                </div>
                <div className="foo-info">
                    <div className="container">
                        <div className="redes">
                            <ul className='lista-info'>
                                <li className='title-info'>REDES SOCIAIS</li>
                                <li className='item-info'>
                                    <FaInstagramSquare />
                                    <span>Instagram</span>
                                </li>
                                <li className='item-info'>
                                    <FaFacebookSquare />
                                    <span>Facebook</span>
                                </li>
                                <li className='item-info'>
                                    <FaWhatsappSquare />
                                    <span>11 98333-5544</span>
                                </li>
                                <li className='item-info'>
                                    <FaLinkedin />
                                    <span>Linkedin</span>
                                </li>
                            </ul>

                            <ul className='lista-info'>
                                <li className='title-info'>Empresa</li>
                                <li className='item-info'>
                                    <span>Sobre nós</span>
                                
                                </li>
                                <li className='item-info'>
                                    <span>Quem Somos</span>
                                </li>
                                <li className='item-info'>
                                    <span>Localização</span>
                                </li>
                                
                            </ul>

                            <ul className='lista-info'>
                                <li className='title-info'>Front-end</li>
                                <li className='item-info'>
                                    <FaInstagramSquare />
                                    <span>Instagram</span>
                                </li>
                                <li className='item-info'>
                                    <FaFacebookSquare />
                                    <span>Facebook</span>
                                </li>
                                <li className='item-info'>
                                    <FaWhatsappSquare />
                                    <span>11 98333-5544</span>
                                </li>
                                <li className='item-info'>
                                    <FaLinkedin />
                                    <span>Linkedin</span>
                                </li>
                            </ul>

                            <ul className='lista-info'>
                                <li className='title-info'>Back-end</li>
                                <li className='item-info'>
                                    <FaInstagramSquare />
                                    <span>Instagram</span>
                                </li>
                                <li className='item-info'>
                                    <FaFacebookSquare />
                                    <span>Facebook</span>
                                </li>
                                <li className='item-info'>
                                    <FaWhatsappSquare />
                                    <span>11 98333-5544</span>
                                </li>
                                <li className='item-info'>
                                    <FaLinkedin />
                                    <span>Linkedin</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}