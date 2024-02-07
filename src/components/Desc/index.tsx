/* eslint-disable @typescript-eslint/no-explicit-any */
//import Carro from '../../assets/carro_toyota.png'

import './style.scss'



export const Desc = (car: { image: string | undefined; modelo: string | undefined; nome: string | undefined, description: string | undefined }) => {
    return (
        <>
            <div className="desc">
                <div className="image-desc">
                    <img src={car.image} />
                    <h4 className='title-desc'>{car.modelo} - {car.nome}</h4>
                    <p>
                        {car.description}
                    </p>
                </div>
            </div>
        </>
    );
}