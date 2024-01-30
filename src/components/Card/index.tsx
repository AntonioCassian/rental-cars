import Carro  from '../../assets/carro_toyota.png'
import './style.scss'

export const Card = () => {
    return(
        <>
            <div className="card">
                <div className="image-card">
                    <p className='title-card'>Toyota - Corolla 2021</p>
                    <img src={Carro} />
                    <span>R$ 50,00</span>
                </div>

                <button className='btn'>
                    Alugar
                </button>
            </div>
        </>
    );
}