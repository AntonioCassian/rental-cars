import Carro from '../../assets/VW-Nivus-2022_1-1.jpg'
import './style.scss'

export const Section = () => {
    return (
        <>
            <section className='frase-img'>
                <div className="container">
                    <div className="d-flex p-3">
                        <div className="car-sec">
                            <img src={Carro} alt="" />
                        </div>

                        <div className="frase">
                            <p>
                                Descubra a liberdade sobre rodas -
                                Alugue seu carro dos sonhos hoje mesmo!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}