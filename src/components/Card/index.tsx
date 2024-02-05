// import Carro  from '../../assets/carro_toyota.png'
import { Car } from '../../Provider/Car'
import './style.scss'


export const Card = ( props: Car ) => {
    return(
        <>
            <div className="card" key={props.id}>
                <div className="image-card">
                    <p className='title-card'>{props.modelo} - {props.nome}</p>
                    <img src={props.image} />
                    <span>R$ {props.valor}</span>
                </div>

                <button className='btn'>
                    Alugar
                </button>
            </div>
        </>
    );
}