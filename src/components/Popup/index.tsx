import { FaTimes } from "react-icons/fa";
import './style.scss'

export const Popup = () => {
    return(
        <>
            <div className="popup">
                <div className="popup-inner">
                    <div className="pop-close">
                        <FaTimes />
                    </div>
                    <div className="pop-text">
                    Informe seu email e cadastre-se!
                    </div>
                    <form className="pop-foo">
                        <input type="text" />
                        <button>
                            Cadastrar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}