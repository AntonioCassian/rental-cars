// import Carro  from '../../assets/carro_toyota.png'
import { Link } from 'react-router-dom';
import { Car } from '../../Provider/Car'
import './style.scss'


export const Card = (props: Car) => {
    return (
        <>
            <div className="card" key={props.id}>
                <Link to={`/${props.id}/des`} className='linkCard'>
                    <div className="image-card">
                        <p className='title-card'>{props.modelo} - {props.nome}</p>
                        <img src={props.image} />
                        <span>R$ {props.valor.toFixed(2).replace('.', ',')}</span>
                    </div>

                    <button className='btn'>
                        Alugar
                    </button>
                </Link>
            </div>
        </>
    );
}