import Carro from '../../assets/carro_toyota.png'
import './style.scss'

export const Desc = () => {
    return (
        <>
            <div className="desc">
                <div className="image-desc">
                    <img src={Carro} />
                    <h4 className='title-desc'>Toyota - Corolla 2021</h4>
                    <p>
                        Com o novo motor híbrido o Toyota Corolla 2021 tem à sua disposição 122 cavalos de potência máxima contra 177 cavalos do motor flex.
                        Pode parecer uma grande diferença, mas o motor híbrido aciona a parte elétrica em rotações mais baixas fazendo com que o torque entregue em retomadas e acelerações seja muito parecido com o do Corolla Flex.
                        Se, no desempenho a diferença é pequena, no consumo ela é muito grande e obviamente em favor do Toyota Corolla 2021 híbrido, com o sedan chegando a rodar 14,5 km/litro de gasolina na cidade e 16,3 km/litro na estrada, contra 9,7 e 13,9 km/litro do Corolla Flex.
                    </p>
                </div>
            </div>
        </>
    );
}